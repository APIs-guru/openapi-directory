from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SegmentDimensionFilterOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    REGEXP = "REGEXP"
    BEGINS_WITH = "BEGINS_WITH"
    ENDS_WITH = "ENDS_WITH"
    PARTIAL = "PARTIAL"
    EXACT = "EXACT"
    IN_LIST = "IN_LIST"
    NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN"
    NUMERIC_GREATER_THAN = "NUMERIC_GREATER_THAN"
    NUMERIC_BETWEEN = "NUMERIC_BETWEEN"


@dataclass_json
@dataclass
class SegmentDimensionFilter:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionName' }})
    expressions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    max_comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxComparisonValue' }})
    min_comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minComparisonValue' }})
    operator: Optional[SegmentDimensionFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
