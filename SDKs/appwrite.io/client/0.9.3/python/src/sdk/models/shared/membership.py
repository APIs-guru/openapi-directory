from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Membership:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    confirm: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirm' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    invited: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invited' }})
    joined: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joined' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    team_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
