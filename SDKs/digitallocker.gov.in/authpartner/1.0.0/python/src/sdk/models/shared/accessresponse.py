from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class AccessResponseEaadharEnum(str, Enum):
    Y = "Y"
    N = "N"

class AccessResponseGenderEnum(str, Enum):
    M = "M"
    F = "F"
    T = "T"


@dataclass_json
@dataclass
class AccessResponse:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    digilocker_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digilocker_id' }})
    dob: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dob' }})
    eaadhar: AccessResponseEaadharEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eaadhar' }})
    expires_in: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    gender: AccessResponseGenderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reference_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_key' }})
    refresh_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scope: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    token_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    
