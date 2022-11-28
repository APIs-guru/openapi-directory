from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderByOrderTypeEnum(str, Enum):
    ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED"
    VALUE = "VALUE"
    DELTA = "DELTA"
    SMART = "SMART"
    HISTOGRAM_BUCKET = "HISTOGRAM_BUCKET"
    DIMENSION_AS_INTEGER = "DIMENSION_AS_INTEGER"

class OrderBySortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class OrderBy:
    r"""OrderBy
    Specifies the sorting options.
    """
    
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    order_type: Optional[OrderByOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderType') }})
    sort_order: Optional[OrderBySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
