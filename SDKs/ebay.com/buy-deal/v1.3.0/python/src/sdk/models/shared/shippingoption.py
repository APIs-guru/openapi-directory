from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class ShippingOption:
    shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_cost_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCostType' }})
    
