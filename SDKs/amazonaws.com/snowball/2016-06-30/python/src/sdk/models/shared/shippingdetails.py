from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shipment
from . import shipment
from . import shippingoption_enum


@dataclass_json
@dataclass
class ShippingDetails:
    inbound_shipment: Optional[shipment.Shipment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboundShipment' }})
    outbound_shipment: Optional[shipment.Shipment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutboundShipment' }})
    shipping_option: Optional[shippingoption_enum.ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    
