from dataclasses import dataclass, field
from typing import Enum

class MetricSetSourceEnum(str, Enum):
    TRAIN = "Train"
    VALIDATION = "Validation"
    TEST = "Test"

