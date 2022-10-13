from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetricFilterOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"
    IS_MISSING = "IS_MISSING"


@dataclass_json
@dataclass
class MetricFilter:
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not' }})
    operator: Optional[MetricFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
