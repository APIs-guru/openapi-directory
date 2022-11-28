from dataclasses import dataclass, field
from enum import Enum

class ExitBehaviorEnum(str, Enum):
    FAIL = "FAIL"
    RESTART = "RESTART"

