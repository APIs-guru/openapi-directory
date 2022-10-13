from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import pickupstep
from . import shippingstep


@dataclass_json
@dataclass
class FulfillmentStartInstruction:
    ebay_supported_fulfillment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebaySupportedFulfillment' }})
    final_destination_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalDestinationAddress' }})
    fulfillment_instructions_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentInstructionsType' }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEstimatedDeliveryDate' }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEstimatedDeliveryDate' }})
    pickup_step: Optional[pickupstep.PickupStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupStep' }})
    shipping_step: Optional[shippingstep.ShippingStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingStep' }})
    
