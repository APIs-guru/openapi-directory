from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResetPasswordRequest:
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
