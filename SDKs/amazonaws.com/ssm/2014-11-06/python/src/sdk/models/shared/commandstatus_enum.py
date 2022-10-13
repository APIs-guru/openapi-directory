from dataclasses import dataclass, field
from typing import Enum

class CommandStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESS = "Success"
    CANCELLED = "Cancelled"
    FAILED = "Failed"
    TIMED_OUT = "TimedOut"
    CANCELLING = "Cancelling"

