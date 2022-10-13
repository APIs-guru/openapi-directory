from dataclasses import dataclass, field
from typing import Enum

class ProtectionGroupAggregationEnum(str, Enum):
    SUM = "SUM"
    MEAN = "MEAN"
    MAX = "MAX"

