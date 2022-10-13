from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LineItemFulfillmentInstructions:
    guaranteed_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedDelivery' }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEstimatedDeliveryDate' }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEstimatedDeliveryDate' }})
    ship_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipByDate' }})
    
