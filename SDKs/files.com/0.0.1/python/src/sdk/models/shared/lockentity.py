from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LockEntity:
    allow_access_by_any_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_access_by_any_user' }})
    depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depth' }})
    exclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusive' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursive' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
