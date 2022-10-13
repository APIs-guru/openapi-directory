from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partnerclaim


@dataclass_json
@dataclass
class ClaimDevicesRequest:
    claims: Optional[List[partnerclaim.PartnerClaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    
