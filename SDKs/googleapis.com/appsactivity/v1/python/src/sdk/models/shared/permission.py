from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Permission
    Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    role: Optional[PermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    type: Optional[PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    with_link: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withLink') }})
    
