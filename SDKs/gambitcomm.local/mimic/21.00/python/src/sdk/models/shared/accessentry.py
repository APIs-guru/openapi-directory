from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessEntry:
    access_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_mask' }})
    agent_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent_range' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
