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
class ShippingFulfillment:
    r"""ShippingFulfillment
    This type contains the complete details of an existing fulfillment for an order.
    """
    
    fulfillment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentId') }})
    line_items: Optional[List[LineItemReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    shipment_tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTrackingNumber') }})
    shipped_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedDate') }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    
