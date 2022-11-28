from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionLimits:
    r"""SubscriptionLimits
    Limits settings for your subscription. 
    """
    
    protection_group_limits: ProtectionGroupLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupLimits') }})
    protection_limits: ProtectionLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionLimits') }})
    
