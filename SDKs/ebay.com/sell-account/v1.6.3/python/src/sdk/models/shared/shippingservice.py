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
class ShippingService:
    r"""ShippingService
    A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
    """
    
    additional_shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalShippingCost') }})
    buyer_responsible_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerResponsibleForPickup') }})
    buyer_responsible_for_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerResponsibleForShipping') }})
    cash_on_delivery_fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashOnDeliveryFee') }})
    free_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeShipping') }})
    ship_to_locations: Optional[RegionSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipToLocations') }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceCode') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    surcharge: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surcharge') }})
    
