from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class PricingSummary:
    adjustment: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment' }})
    delivery_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCost' }})
    delivery_discount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDiscount' }})
    fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    price_discount_subtotal: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDiscountSubtotal' }})
    price_subtotal: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceSubtotal' }})
    tax: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    total: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
