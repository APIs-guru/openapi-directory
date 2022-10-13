from dataclasses import dataclass, field
from typing import Enum

class AutoScalingTypeEnum(str, Enum):
    LOAD = "load"
    TIMER = "timer"

