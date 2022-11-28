from dataclasses import dataclass, field
from enum import Enum

class TransformJobStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

