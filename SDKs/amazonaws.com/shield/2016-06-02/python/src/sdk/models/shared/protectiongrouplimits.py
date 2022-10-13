from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import protectiongrouppatterntypelimits


@dataclass_json
@dataclass
class ProtectionGroupLimits:
    max_protection_groups: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxProtectionGroups' }})
    pattern_type_limits: protectiongrouppatterntypelimits.ProtectionGroupPatternTypeLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatternTypeLimits' }})
    
