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
class PurchasedRate:
    r"""PurchasedRate
    The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
    """
    
    additional_options: Optional[List[AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOptions') }})
    base_shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseShippingCost') }})
    destination_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTimeZone') }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEstimatedDeliveryDate') }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minEstimatedDeliveryDate') }})
    pickup_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupNetworks') }})
    pickup_slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupSlotId') }})
    pickup_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupType') }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateId') }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    shipping_carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierName') }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingQuoteId') }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceCode') }})
    shipping_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceName') }})
    total_shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalShippingCost') }})
    
