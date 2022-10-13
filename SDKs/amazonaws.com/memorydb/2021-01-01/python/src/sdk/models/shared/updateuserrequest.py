from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authenticationmode


@dataclass_json
@dataclass
class UpdateUserRequest:
    access_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessString' }})
    authentication_mode: Optional[authenticationmode.AuthenticationMode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationMode' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
