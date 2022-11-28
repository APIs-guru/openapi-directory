from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""SegmentMetricFilter
    Metric filter to be used in a segment filter clause.
    """
    
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    max_comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxComparisonValue') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    operator: Optional[SegmentMetricFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    scope: Optional[SegmentMetricFilterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
