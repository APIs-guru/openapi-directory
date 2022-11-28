from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LoginRequestAuthTypeEnum(str, Enum):
    BASIC = "basic"
    ACTIVE_DIRECTORY = "active_directory"
    RADIUS = "radius"


@dataclass_json
@dataclass
class LoginRequest:
    r"""LoginRequest
    Request model for performing an authentication
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    auth_type: Optional[LoginRequestAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
