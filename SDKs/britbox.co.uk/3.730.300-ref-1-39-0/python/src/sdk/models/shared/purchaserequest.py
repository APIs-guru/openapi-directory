from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PurchaseRequest:
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethodId' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planId' }})
    
