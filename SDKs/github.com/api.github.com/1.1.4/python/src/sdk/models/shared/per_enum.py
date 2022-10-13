from dataclasses import dataclass, field
from typing import Enum

class PerEnum(str, Enum):
    UNKNOWN = ""
    DAY = "day"
    WEEK = "week"

