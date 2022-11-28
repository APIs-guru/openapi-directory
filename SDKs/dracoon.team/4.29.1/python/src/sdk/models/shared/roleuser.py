from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoleUser:
    r"""RoleUser
    User information
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_member: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMember') }})
    user_info: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
