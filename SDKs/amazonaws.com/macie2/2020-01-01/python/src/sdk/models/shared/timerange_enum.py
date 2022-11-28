from dataclasses import dataclass, field
from enum import Enum

class TimeRangeEnum(str, Enum):
    MONTH_TO_DATE = "MONTH_TO_DATE"
    PAST_30_DAYS = "PAST_30_DAYS"

