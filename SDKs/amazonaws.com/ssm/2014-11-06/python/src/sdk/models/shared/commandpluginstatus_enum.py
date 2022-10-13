from dataclasses import dataclass, field
from typing import Enum

class CommandPluginStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESS = "Success"
    TIMED_OUT = "TimedOut"
    CANCELLED = "Cancelled"
    FAILED = "Failed"

