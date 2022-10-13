from dataclasses import dataclass, field
from typing import Enum

class ExecutionStatusEnum(str, Enum):
    PENDING = "Pending"
    COMPLETED = "Completed"
    COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

