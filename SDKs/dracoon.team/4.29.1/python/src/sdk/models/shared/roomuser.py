from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoomUserOutput:
    r"""RoomUserOutput
    User information
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_granted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGranted') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    user_info: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    permissions: Optional[NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    public_key_container: Optional[PublicKeyContainerOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyContainer') }})
    
