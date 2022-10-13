from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user

class PermissionRoleEnum(str, Enum):
    COMMENTER = "commenter"
    FILE_ORGANIZER = "fileOrganizer"
    OWNER = "owner"
    PUBLISHED_READER = "publishedReader"
    READER = "reader"
    WRITER = "writer"

class PermissionTypeEnum(str, Enum):
    ANYONE = "anyone"
    DOMAIN = "domain"
    GROUP = "group"
    USER = "user"


@dataclass_json
@dataclass
class Permission:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionId' }})
    role: Optional[PermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    type: Optional[PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    with_link: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withLink' }})
    
