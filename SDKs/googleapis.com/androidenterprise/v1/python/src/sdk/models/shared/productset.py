from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductSetProductSetBehaviorEnum(str, Enum):
    UNKNOWN = "unknown"
    WHITELIST = "whitelist"
    INCLUDE_ALL = "includeAll"
    ALL_APPROVED = "allApproved"


@dataclass_json
@dataclass
class ProductSet:
    r"""ProductSet
    A set of products.
    """
    
    product_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_set_behavior: Optional[ProductSetProductSetBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSetBehavior') }})
    product_visibility: Optional[List[ProductVisibility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productVisibility') }})
    
