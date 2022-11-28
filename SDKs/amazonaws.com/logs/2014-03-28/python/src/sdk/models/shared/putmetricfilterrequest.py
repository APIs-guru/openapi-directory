from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutMetricFilterRequest:
    filter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    filter_pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    metric_transformations: List[MetricTransformation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTransformations') }})
    
