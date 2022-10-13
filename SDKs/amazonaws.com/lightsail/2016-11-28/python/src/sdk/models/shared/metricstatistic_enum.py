from dataclasses import dataclass, field
from typing import Enum

class MetricStatisticEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SUM = "Sum"
    AVERAGE = "Average"
    SAMPLE_COUNT = "SampleCount"

