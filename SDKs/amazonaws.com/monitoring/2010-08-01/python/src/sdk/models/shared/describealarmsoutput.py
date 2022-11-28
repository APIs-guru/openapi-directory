from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAlarmsOutput:
    composite_alarms: Optional[List[CompositeAlarm]] = field(default=None)
    metric_alarms: Optional[List[MetricAlarm]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
