from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserInfoUserTypeEnum(str, Enum):
    SYSTEM = "system"
    INTERNAL = "internal"
    EXTERNAL = "external"
    DELETED = "deleted"


@dataclass_json
@dataclass
class UserInfo:
    avatar_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUuid' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    user_type: UserInfoUserTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userType' }})
    
