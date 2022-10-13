from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itventitlement


@dataclass_json
@dataclass
class ItvSubscriptionState:
    effective_entitlements: List[itventitlement.ItvEntitlement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_entitlements' }})
    failed_availability_checks: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_availability_checks' }})
    purchased: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchased' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
