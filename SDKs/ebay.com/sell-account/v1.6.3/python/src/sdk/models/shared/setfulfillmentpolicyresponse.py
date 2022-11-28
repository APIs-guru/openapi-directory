from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetFulfillmentPolicyResponse:
    r"""SetFulfillmentPolicyResponse
    Complex type that that gets populated with a response containing a fulfillment policy.
    """
    
    category_types: Optional[List[CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    freight_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freightShipping') }})
    fulfillment_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentPolicyId') }})
    global_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalShipping') }})
    handling_time: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingTime') }})
    local_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPickup') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pickup_drop_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupDropOff') }})
    ship_to_locations: Optional[RegionSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipToLocations') }})
    shipping_options: Optional[List[ShippingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOptions') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
