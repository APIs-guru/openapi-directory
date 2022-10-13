from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupUserEntity:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    usernames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernames' }})
    
