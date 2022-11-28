from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricFilter:
    r"""MetricFilter
    Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
    """
    
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    filter_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    metric_transformations: Optional[List[MetricTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTransformations') }})
    
