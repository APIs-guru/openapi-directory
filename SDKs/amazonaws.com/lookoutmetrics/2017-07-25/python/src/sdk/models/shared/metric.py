from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregationfunction_enum


@dataclass_json
@dataclass
class Metric:
    aggregation_function: aggregationfunction_enum.AggregationFunctionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregationFunction' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    
