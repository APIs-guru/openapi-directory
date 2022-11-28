from dataclasses import dataclass, field
from enum import Enum

class AutoScalingTypeEnum(str, Enum):
    LOAD = "load"
    TIMER = "timer"

