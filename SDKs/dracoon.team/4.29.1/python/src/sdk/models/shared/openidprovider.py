from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpenIDProvider:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_global_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGlobalAvailable' }})
    issuer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    mapping_claim: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappingClaim' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_management_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManagementUrl' }})
    
