from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partnerunclaim


@dataclass_json
@dataclass
class UnclaimDevicesRequest:
    unclaims: Optional[List[partnerunclaim.PartnerUnclaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclaims' }})
    
