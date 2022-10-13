from dataclasses import dataclass, field
from typing import Enum

class RunningModeEnum(str, Enum):
    AUTO_STOP = "AUTO_STOP"
    ALWAYS_ON = "ALWAYS_ON"

