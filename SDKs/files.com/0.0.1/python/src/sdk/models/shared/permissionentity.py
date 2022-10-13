from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PermissionEntityPermissionEnum(str, Enum):
    FULL = "full"
    READONLY = "readonly"
    WRITEONLY = "writeonly"
    LIST = "list"
    HISTORY = "history"
    ADMIN = "admin"
    BUNDLE = "bundle"


@dataclass_json
@dataclass
class PermissionEntity:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    permission: Optional[PermissionEntityPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursive' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
