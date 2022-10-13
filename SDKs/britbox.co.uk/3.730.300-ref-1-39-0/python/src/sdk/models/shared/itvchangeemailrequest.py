from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvChangeEmailRequest:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    
