from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import extendedcontact


@dataclass_json
@dataclass
class ShippingStep:
    ship_to: Optional[extendedcontact.ExtendedContact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipTo' }})
    ship_to_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipToReferenceId' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceCode' }})
    
