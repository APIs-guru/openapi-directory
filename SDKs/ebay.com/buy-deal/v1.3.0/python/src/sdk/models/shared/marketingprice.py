from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketingPrice:
    r"""MarketingPrice
    A type that describes the seller discount.
    """
    
    discount_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    original_price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    price_treatment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceTreatment') }})
    
