from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import money

class PricePricingTypeEnum(str, Enum):
    PRICING_TYPE_UNSPECIFIED = "PRICING_TYPE_UNSPECIFIED"
    COST_PER_MILLE = "COST_PER_MILLE"
    COST_PER_DAY = "COST_PER_DAY"


@dataclass_json
@dataclass
class Price:
    amount: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    pricing_type: Optional[PricePricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingType' }})
    
