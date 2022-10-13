from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangePasswordRequest:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    
