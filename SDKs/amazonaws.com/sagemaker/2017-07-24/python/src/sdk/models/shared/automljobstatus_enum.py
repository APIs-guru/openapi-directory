from dataclasses import dataclass, field
from enum import Enum

class AutoMlJobStatusEnum(str, Enum):
    COMPLETED = "Completed"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

