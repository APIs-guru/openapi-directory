from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpgradeTargetingRule:
    r"""UpgradeTargetingRule
    Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
    """
    
    billing_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodDuration') }})
    once_per_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oncePerUser') }})
    scope: Optional[TargetingRuleScope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
