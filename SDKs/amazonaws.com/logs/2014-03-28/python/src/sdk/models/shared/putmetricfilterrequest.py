from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import metrictransformation


@dataclass_json
@dataclass
class PutMetricFilterRequest:
    filter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterName' }})
    filter_pattern: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPattern' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    metric_transformations: List[metrictransformation.MetricTransformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricTransformations' }})
    
