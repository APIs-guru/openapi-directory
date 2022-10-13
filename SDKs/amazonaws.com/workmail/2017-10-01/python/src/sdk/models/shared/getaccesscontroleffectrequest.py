from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAccessControlEffectRequest:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
