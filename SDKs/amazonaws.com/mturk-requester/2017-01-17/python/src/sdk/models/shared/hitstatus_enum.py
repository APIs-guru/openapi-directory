from dataclasses import dataclass, field
from typing import Enum

class HitStatusEnum(str, Enum):
    ASSIGNABLE = "Assignable"
    UNASSIGNABLE = "Unassignable"
    REVIEWABLE = "Reviewable"
    REVIEWING = "Reviewing"
    DISPOSED = "Disposed"

