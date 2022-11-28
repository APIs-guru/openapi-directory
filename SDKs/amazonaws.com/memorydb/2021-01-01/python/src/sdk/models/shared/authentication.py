from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Authentication:
    r"""Authentication
    Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
    """
    
    password_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordCount') }})
    type: Optional[AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
