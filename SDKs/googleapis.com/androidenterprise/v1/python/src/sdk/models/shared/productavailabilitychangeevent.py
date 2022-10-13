from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProductAvailabilityChangeEventAvailabilityStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    AVAILABLE = "available"
    REMOVED = "removed"
    UNPUBLISHED = "unpublished"


@dataclass_json
@dataclass
class ProductAvailabilityChangeEvent:
    availability_status: Optional[ProductAvailabilityChangeEventAvailabilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityStatus' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
