from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionPurchaseLineItem:
    r"""SubscriptionPurchaseLineItem
    Item-level info for a subscription purchase.
    """
    
    auto_renewing_plan: Optional[AutoRenewingPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingPlan') }})
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    offer_details: Optional[OfferDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDetails') }})
    prepaid_plan: Optional[PrepaidPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidPlan') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
