from dataclasses import dataclass, field
from enum import Enum

class StatisticEnum(str, Enum):
    SAMPLE_COUNT = "SampleCount"
    AVERAGE = "Average"
    SUM = "Sum"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"

