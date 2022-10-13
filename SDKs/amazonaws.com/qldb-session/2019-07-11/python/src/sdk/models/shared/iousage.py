from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IoUsage:
    read_i_os: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadIOs' }})
    write_i_os: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteIOs' }})
    
