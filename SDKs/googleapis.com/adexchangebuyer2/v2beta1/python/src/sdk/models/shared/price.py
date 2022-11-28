from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PricePricingTypeEnum(str, Enum):
    PRICING_TYPE_UNSPECIFIED = "PRICING_TYPE_UNSPECIFIED"
    COST_PER_MILLE = "COST_PER_MILLE"
    COST_PER_DAY = "COST_PER_DAY"


@dataclass_json
@dataclass
class Price:
    r"""Price
    Represents a price and a pricing type for a product / deal.
    """
    
    amount: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    pricing_type: Optional[PricePricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingType') }})
    
