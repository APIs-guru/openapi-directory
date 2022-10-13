from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metrictransformation


@dataclass_json
@dataclass
class MetricFilter:
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterName' }})
    filter_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPattern' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    metric_transformations: Optional[List[metrictransformation.MetricTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricTransformations' }})
    
