from dataclasses import dataclass, field
from typing import Enum

class HyperParameterTuningJobStatusEnum(str, Enum):
    COMPLETED = "Completed"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

