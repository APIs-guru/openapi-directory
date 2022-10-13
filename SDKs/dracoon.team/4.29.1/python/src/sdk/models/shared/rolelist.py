from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import role


@dataclass_json
@dataclass
class RoleList:
    items: List[role.Role] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
