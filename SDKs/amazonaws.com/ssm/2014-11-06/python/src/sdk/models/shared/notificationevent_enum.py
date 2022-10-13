from dataclasses import dataclass, field
from typing import Enum

class NotificationEventEnum(str, Enum):
    ALL = "All"
    IN_PROGRESS = "InProgress"
    SUCCESS = "Success"
    TIMED_OUT = "TimedOut"
    CANCELLED = "Cancelled"
    FAILED = "Failed"

