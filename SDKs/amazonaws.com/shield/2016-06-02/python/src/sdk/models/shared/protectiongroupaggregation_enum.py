from dataclasses import dataclass, field
from enum import Enum

class ProtectionGroupAggregationEnum(str, Enum):
    SUM = "SUM"
    MEAN = "MEAN"
    MAX = "MAX"

