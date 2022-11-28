from dataclasses import dataclass, field
from enum import Enum

class ExecutionStateEnum(str, Enum):
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    REJECTED = "REJECTED"
    TIMED_OUT = "TIMED_OUT"

