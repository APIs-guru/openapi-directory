from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlanPurchaseTypeEnum(str, Enum):
    FREE = "Free"
    SUBSCRIPTION = "Subscription"


@dataclass_json
@dataclass
class PlanPurchase:
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: PlanPurchaseTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    
