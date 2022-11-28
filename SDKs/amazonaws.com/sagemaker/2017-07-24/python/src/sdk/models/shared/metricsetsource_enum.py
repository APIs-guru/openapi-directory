from dataclasses import dataclass, field
from enum import Enum

class MetricSetSourceEnum(str, Enum):
    TRAIN = "Train"
    VALIDATION = "Validation"
    TEST = "Test"

