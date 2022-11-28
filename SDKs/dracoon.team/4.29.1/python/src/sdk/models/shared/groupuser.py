from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupUser:
    r"""GroupUser
    User information
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_member: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMember') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    user_info: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
