from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleGroup:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_member: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMember' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
