from dataclasses import dataclass, field
from typing import Enum

class ReportFrequencyTypeEnum(str, Enum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"

