from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlanPurchaseTypeEnum(str, Enum):
    FREE = "Free"
    SUBSCRIPTION = "Subscription"


@dataclass_json
@dataclass
class PlanPurchase:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PlanPurchaseTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
