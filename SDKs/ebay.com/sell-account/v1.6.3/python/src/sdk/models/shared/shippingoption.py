from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import shippingservice


@dataclass_json
@dataclass
class ShippingOption:
    cost_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costType' }})
    insurance_fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insuranceFee' }})
    insurance_offered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insuranceOffered' }})
    option_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionType' }})
    package_handling_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageHandlingCost' }})
    rate_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateTableId' }})
    shipping_services: Optional[List[shippingservice.ShippingService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServices' }})
    
