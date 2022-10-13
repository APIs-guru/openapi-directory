from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import productvisibility

class ProductSetProductSetBehaviorEnum(str, Enum):
    UNKNOWN = "unknown"
    WHITELIST = "whitelist"
    INCLUDE_ALL = "includeAll"
    ALL_APPROVED = "allApproved"


@dataclass_json
@dataclass
class ProductSet:
    product_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_set_behavior: Optional[ProductSetProductSetBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSetBehavior' }})
    product_visibility: Optional[List[productvisibility.ProductVisibility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productVisibility' }})
    
