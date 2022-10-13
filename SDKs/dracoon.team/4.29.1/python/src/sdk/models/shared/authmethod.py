from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthMethod:
    is_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    
