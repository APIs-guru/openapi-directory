from dataclasses import dataclass, field
from enum import Enum

class PerEnum(str, Enum):
    UNKNOWN = ""
    DAY = "day"
    WEEK = "week"

