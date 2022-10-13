from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DimensionOrderByOrderTypeEnum(str, Enum):
    ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED"
    ALPHANUMERIC = "ALPHANUMERIC"
    CASE_INSENSITIVE_ALPHANUMERIC = "CASE_INSENSITIVE_ALPHANUMERIC"
    NUMERIC = "NUMERIC"


@dataclass_json
@dataclass
class DimensionOrderBy:
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionName' }})
    order_type: Optional[DimensionOrderByOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderType' }})
    
