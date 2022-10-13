from dataclasses import dataclass, field
from typing import Enum

class LabelingJobStatusEnum(str, Enum):
    INITIALIZING = "Initializing"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

