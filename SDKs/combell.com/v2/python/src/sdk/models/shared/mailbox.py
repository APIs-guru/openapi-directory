from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Mailbox:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_size' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
