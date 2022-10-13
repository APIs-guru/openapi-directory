from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAccessControlRuleRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
