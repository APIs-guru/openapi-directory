from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class UserList:
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    users: List[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
