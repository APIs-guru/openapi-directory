from dataclasses import dataclass, field
from typing import Enum

class JobStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    CANCELLED = "CANCELLED"
    COMPLETE = "COMPLETE"
    IDLE = "IDLE"
    USER_PAUSED = "USER_PAUSED"

