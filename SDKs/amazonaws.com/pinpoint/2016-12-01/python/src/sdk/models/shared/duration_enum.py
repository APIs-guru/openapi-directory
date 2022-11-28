from dataclasses import dataclass, field
from enum import Enum

class DurationEnum(str, Enum):
    HR_24 = "HR_24"
    DAY_7 = "DAY_7"
    DAY_14 = "DAY_14"
    DAY_30 = "DAY_30"

