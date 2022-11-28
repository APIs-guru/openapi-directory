from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LineItemFulfillmentInstructions:
    r"""LineItemFulfillmentInstructions
    This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
    """
    
    guaranteed_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedDelivery') }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEstimatedDeliveryDate') }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minEstimatedDeliveryDate') }})
    ship_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipByDate') }})
    
