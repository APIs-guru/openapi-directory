from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DimensionFilterOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    REGEXP = "REGEXP"
    BEGINS_WITH = "BEGINS_WITH"
    ENDS_WITH = "ENDS_WITH"
    PARTIAL = "PARTIAL"
    EXACT = "EXACT"
    NUMERIC_EQUAL = "NUMERIC_EQUAL"
    NUMERIC_GREATER_THAN = "NUMERIC_GREATER_THAN"
    NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN"
    IN_LIST = "IN_LIST"


@dataclass_json
@dataclass
class DimensionFilter:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionName' }})
    expressions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not' }})
    operator: Optional[DimensionFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
