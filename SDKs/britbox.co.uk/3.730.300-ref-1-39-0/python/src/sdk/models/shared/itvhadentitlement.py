from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvHadEntitlement:
    has_had_entitlements: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasHadEntitlements' }})
    
