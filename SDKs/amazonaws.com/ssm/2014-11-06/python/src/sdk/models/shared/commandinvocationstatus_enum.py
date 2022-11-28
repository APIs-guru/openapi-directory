from dataclasses import dataclass, field
from enum import Enum

class CommandInvocationStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    DELAYED = "Delayed"
    SUCCESS = "Success"
    CANCELLED = "Cancelled"
    TIMED_OUT = "TimedOut"
    FAILED = "Failed"
    CANCELLING = "Cancelling"

