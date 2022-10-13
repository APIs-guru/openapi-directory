from dataclasses import dataclass, field
from typing import Enum

class CandidateStatusEnum(str, Enum):
    COMPLETED = "Completed"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

