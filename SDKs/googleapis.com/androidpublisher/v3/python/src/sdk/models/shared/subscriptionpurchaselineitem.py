from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autorenewingplan
from . import prepaidplan


@dataclass_json
@dataclass
class SubscriptionPurchaseLineItem:
    auto_renewing_plan: Optional[autorenewingplan.AutoRenewingPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRenewingPlan' }})
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryTime' }})
    prepaid_plan: Optional[prepaidplan.PrepaidPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaidPlan' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
