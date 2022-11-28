from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    COMPLETED_WITH_ERROR = "COMPLETED_WITH_ERROR"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

