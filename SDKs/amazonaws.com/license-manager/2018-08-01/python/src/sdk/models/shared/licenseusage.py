from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitlementusage


@dataclass_json
@dataclass
class LicenseUsage:
    entitlement_usages: Optional[List[entitlementusage.EntitlementUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitlementUsages' }})
    
