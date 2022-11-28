from dataclasses import dataclass, field
from enum import Enum

class UnlockStateEnum(str, Enum):
    UNLOCKED = "UNLOCKED"
    LOCKED = "LOCKED"
    UNLOCKING = "UNLOCKING"

