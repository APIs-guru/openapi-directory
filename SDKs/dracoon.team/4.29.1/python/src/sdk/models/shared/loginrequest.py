from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LoginRequestAuthTypeEnum(str, Enum):
    BASIC = "basic"
    ACTIVE_DIRECTORY = "active_directory"
    RADIUS = "radius"


@dataclass_json
@dataclass
class LoginRequest:
    auth_type: Optional[LoginRequestAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
