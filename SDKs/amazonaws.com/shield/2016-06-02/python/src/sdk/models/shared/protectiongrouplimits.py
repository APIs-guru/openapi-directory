from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectionGroupLimits:
    r"""ProtectionGroupLimits
    Limits settings on protection groups for your subscription. 
    """
    
    max_protection_groups: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxProtectionGroups') }})
    pattern_type_limits: ProtectionGroupPatternTypeLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternTypeLimits') }})
    
