from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserInfoUserTypeEnum(str, Enum):
    SYSTEM = "system"
    INTERNAL = "internal"
    EXTERNAL = "external"
    DELETED = "deleted"


@dataclass_json
@dataclass
class UserInfo:
    r"""UserInfo
    User information
    """
    
    avatar_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUuid') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    user_type: UserInfoUserTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
