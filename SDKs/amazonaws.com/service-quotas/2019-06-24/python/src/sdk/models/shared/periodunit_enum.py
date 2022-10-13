from dataclasses import dataclass, field
from typing import Enum

class PeriodUnitEnum(str, Enum):
    MICROSECOND = "MICROSECOND"
    MILLISECOND = "MILLISECOND"
    SECOND = "SECOND"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    DAY = "DAY"
    WEEK = "WEEK"

