from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserTypeEnum(str, Enum):
    USER_ID_TYPE_UNSPECIFIED = "USER_ID_TYPE_UNSPECIFIED"
    USER_ID = "USER_ID"
    CLIENT_ID = "CLIENT_ID"


@dataclass_json
@dataclass
class User:
    r"""User
    Contains information to identify a particular user uniquely.
    """
    
    type: Optional[UserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
