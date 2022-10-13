from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class RegionalSubscriptionOfferPhaseConfig:
    absolute_discount: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteDiscount' }})
    price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    relative_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeDiscount' }})
    
