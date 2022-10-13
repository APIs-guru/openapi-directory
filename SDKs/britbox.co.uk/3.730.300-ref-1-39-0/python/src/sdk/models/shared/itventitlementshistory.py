from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itventitlementcancelation
from . import itventitlement


@dataclass_json
@dataclass
class ItvEntitlementsHistory:
    cancellations: List[itventitlementcancelation.ItvEntitlementCancelation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellations' }})
    entitlements: List[itventitlement.ItvEntitlement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlements' }})
    
