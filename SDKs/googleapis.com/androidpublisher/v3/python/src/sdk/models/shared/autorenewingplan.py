from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoRenewingPlan:
    r"""AutoRenewingPlan
    Information related to an auto renewing plan.
    """
    
    auto_renew_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewEnabled') }})
    price_change_details: Optional[SubscriptionItemPriceChangeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeDetails') }})
    
