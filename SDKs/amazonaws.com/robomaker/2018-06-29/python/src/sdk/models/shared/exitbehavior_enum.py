from dataclasses import dataclass, field
from typing import Enum

class ExitBehaviorEnum(str, Enum):
    FAIL = "FAIL"
    RESTART = "RESTART"

