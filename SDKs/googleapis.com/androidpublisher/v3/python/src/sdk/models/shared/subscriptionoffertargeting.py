from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionOfferTargeting:
    r"""SubscriptionOfferTargeting
    Defines the rule a user needs to satisfy to receive this offer.
    """
    
    acquisition_rule: Optional[AcquisitionTargetingRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionRule') }})
    upgrade_rule: Optional[UpgradeTargetingRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeRule') }})
    
