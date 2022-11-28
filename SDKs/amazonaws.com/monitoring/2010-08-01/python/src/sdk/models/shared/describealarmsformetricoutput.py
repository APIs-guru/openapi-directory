from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAlarmsForMetricOutput:
    metric_alarms: Optional[List[MetricAlarm]] = field(default=None)
    
