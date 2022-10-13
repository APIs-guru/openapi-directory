from dataclasses import dataclass, field
from typing import Enum

class UsageStatisticsFilterComparatorEnum(str, Enum):
    GT = "GT"
    GTE = "GTE"
    LT = "LT"
    LTE = "LTE"
    EQ = "EQ"
    NE = "NE"
    CONTAINS = "CONTAINS"

