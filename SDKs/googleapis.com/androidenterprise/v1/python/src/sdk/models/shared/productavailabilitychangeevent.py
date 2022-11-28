from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductAvailabilityChangeEventAvailabilityStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    AVAILABLE = "available"
    REMOVED = "removed"
    UNPUBLISHED = "unpublished"


@dataclass_json
@dataclass
class ProductAvailabilityChangeEvent:
    r"""ProductAvailabilityChangeEvent
    An event generated whenever a product's availability changes.
    """
    
    availability_status: Optional[ProductAvailabilityChangeEventAvailabilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityStatus') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
