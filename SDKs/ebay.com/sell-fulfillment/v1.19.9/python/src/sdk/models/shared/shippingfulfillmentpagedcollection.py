from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shippingfulfillment
from . import error


@dataclass_json
@dataclass
class ShippingFulfillmentPagedCollection:
    fulfillments: Optional[List[shippingfulfillment.ShippingFulfillment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillments' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
