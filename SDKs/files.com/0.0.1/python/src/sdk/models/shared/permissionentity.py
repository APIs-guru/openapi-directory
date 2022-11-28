from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PermissionEntity
    List Permissions
    """
    
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permission: Optional[PermissionEntityPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursive') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
