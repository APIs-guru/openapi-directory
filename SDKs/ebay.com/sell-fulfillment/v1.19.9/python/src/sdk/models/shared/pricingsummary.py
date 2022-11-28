from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricingSummary:
    r"""PricingSummary
    This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
    """
    
    adjustment: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    delivery_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCost') }})
    delivery_discount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDiscount') }})
    fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    price_discount_subtotal: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDiscountSubtotal') }})
    price_subtotal: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceSubtotal') }})
    tax: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    total: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
