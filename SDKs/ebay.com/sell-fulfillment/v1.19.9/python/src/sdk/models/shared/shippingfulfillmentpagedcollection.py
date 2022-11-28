from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingFulfillmentPagedCollection:
    r"""ShippingFulfillmentPagedCollection
    This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
    """
    
    fulfillments: Optional[List[ShippingFulfillment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillments') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
