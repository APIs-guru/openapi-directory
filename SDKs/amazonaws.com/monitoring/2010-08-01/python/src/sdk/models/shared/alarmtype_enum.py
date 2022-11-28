from dataclasses import dataclass, field
from enum import Enum

class AlarmTypeEnum(str, Enum):
    COMPOSITE_ALARM = "CompositeAlarm"
    METRIC_ALARM = "MetricAlarm"

