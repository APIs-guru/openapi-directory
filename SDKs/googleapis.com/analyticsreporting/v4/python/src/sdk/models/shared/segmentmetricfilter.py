from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SegmentMetricFilterOperatorEnum(str, Enum):
    UNSPECIFIED_OPERATOR = "UNSPECIFIED_OPERATOR"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"
    EQUAL = "EQUAL"
    BETWEEN = "BETWEEN"

class SegmentMetricFilterScopeEnum(str, Enum):
    UNSPECIFIED_SCOPE = "UNSPECIFIED_SCOPE"
    PRODUCT = "PRODUCT"
    HIT = "HIT"
    SESSION = "SESSION"
    USER = "USER"


@dataclass_json
@dataclass
class SegmentMetricFilter:
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    max_comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxComparisonValue' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    operator: Optional[SegmentMetricFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    scope: Optional[SegmentMetricFilterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
