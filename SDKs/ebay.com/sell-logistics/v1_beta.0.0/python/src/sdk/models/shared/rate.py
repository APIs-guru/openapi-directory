from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rate:
    r"""Rate
    This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
    """
    
    additional_options: Optional[List[AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOptions') }})
    base_shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseShippingCost') }})
    destination_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTimeZone') }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEstimatedDeliveryDate') }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minEstimatedDeliveryDate') }})
    pickup_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupNetworks') }})
    pickup_slots: Optional[List[PickupSlot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupSlots') }})
    pickup_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupType') }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateId') }})
    rate_recommendation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateRecommendation') }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    shipping_carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierName') }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceCode') }})
    shipping_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceName') }})
    
