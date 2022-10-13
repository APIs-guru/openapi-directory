from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    order_type: Optional[OrderByOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderType' }})
    sort_order: Optional[OrderBySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
