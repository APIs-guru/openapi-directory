from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import protectiongrouplimits
from . import protectionlimits


@dataclass_json
@dataclass
class SubscriptionLimits:
    protection_group_limits: protectiongrouplimits.ProtectionGroupLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionGroupLimits' }})
    protection_limits: protectionlimits.ProtectionLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionLimits' }})
    
