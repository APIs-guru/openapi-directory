from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePrimaryEmailAddressRequest:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    entity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
