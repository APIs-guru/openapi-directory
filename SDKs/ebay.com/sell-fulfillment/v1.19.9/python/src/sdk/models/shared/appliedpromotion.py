from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class AppliedPromotion:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discount_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountAmount' }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionId' }})
    
