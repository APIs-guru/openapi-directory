from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import protectiongrouparbitrarypatternlimits


@dataclass_json
@dataclass
class ProtectionGroupPatternTypeLimits:
    arbitrary_pattern_limits: protectiongrouparbitrarypatternlimits.ProtectionGroupArbitraryPatternLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArbitraryPatternLimits' }})
    
