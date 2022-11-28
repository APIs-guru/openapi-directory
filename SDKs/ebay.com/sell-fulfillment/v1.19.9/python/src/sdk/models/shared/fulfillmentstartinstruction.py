from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FulfillmentStartInstruction:
    r"""FulfillmentStartInstruction
    This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
    """
    
    ebay_supported_fulfillment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebaySupportedFulfillment') }})
    final_destination_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalDestinationAddress') }})
    fulfillment_instructions_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentInstructionsType') }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEstimatedDeliveryDate') }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minEstimatedDeliveryDate') }})
    pickup_step: Optional[PickupStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupStep') }})
    shipping_step: Optional[ShippingStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingStep') }})
    
