from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class Authentication:
    password_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordCount' }})
    type: Optional[authenticationtype_enum.AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
