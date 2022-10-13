from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUserRequest:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    
