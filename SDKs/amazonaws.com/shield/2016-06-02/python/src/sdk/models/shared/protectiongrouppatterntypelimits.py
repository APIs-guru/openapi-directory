from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectionGroupPatternTypeLimits:
    r"""ProtectionGroupPatternTypeLimits
    Limits settings by pattern type in the protection groups for your subscription. 
    """
    
    arbitrary_pattern_limits: ProtectionGroupArbitraryPatternLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArbitraryPatternLimits') }})
    
