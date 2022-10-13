from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitlement


@dataclass_json
@dataclass
class EntitlementsListResponse:
    entitlement: Optional[List[entitlement.Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlement' }})
    
