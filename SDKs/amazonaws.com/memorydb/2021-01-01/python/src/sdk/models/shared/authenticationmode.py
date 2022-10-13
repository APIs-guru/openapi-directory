from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inputauthenticationtype_enum


@dataclass_json
@dataclass
class AuthenticationMode:
    passwords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Passwords' }})
    type: Optional[inputauthenticationtype_enum.InputAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
