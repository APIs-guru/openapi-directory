from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorytype
from . import timeduration
from . import regionset
from . import shippingoption
from . import error


@dataclass_json
@dataclass
class SetFulfillmentPolicyResponse:
    category_types: Optional[List[categorytype.CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTypes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    freight_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freightShipping' }})
    fulfillment_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentPolicyId' }})
    global_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalShipping' }})
    handling_time: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handlingTime' }})
    local_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPickup' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pickup_drop_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupDropOff' }})
    ship_to_locations: Optional[regionset.RegionSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipToLocations' }})
    shipping_options: Optional[List[shippingoption.ShippingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingOptions' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
