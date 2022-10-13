from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tariffh0:
    ap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ap' }})
    gp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gp' }})
    
