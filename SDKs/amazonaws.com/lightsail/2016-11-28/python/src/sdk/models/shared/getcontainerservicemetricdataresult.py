from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContainerServiceMetricDataResult:
    metric_data: Optional[List[MetricDatapoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricData') }})
    metric_name: Optional[ContainerServiceMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    
