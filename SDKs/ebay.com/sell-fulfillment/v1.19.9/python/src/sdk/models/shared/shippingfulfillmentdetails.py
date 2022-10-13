from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitemreference


@dataclass_json
@dataclass
class ShippingFulfillmentDetails:
    line_items: Optional[List[lineitemreference.LineItemReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    shipped_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippedDate' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumber' }})
    
