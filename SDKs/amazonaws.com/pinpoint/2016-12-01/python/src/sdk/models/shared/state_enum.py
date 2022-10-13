from dataclasses import dataclass, field
from typing import Enum

class StateEnum(str, Enum):
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PAUSED = "PAUSED"

