from dataclasses import dataclass, field
from typing import Enum

class UnlockStateEnum(str, Enum):
    UNLOCKED = "UNLOCKED"
    LOCKED = "LOCKED"
    UNLOCKING = "UNLOCKING"

