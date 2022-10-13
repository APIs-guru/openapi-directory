from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class DeliveryCost:
    import_charges: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importCharges' }})
    shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_intermediation_fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingIntermediationFee' }})
    
