from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrackingInfo:
    shipment_tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentTrackingNumber' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    
