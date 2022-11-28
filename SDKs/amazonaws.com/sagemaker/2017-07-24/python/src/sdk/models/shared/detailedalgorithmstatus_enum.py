from dataclasses import dataclass, field
from enum import Enum

class DetailedAlgorithmStatusEnum(str, Enum):
    NOT_STARTED = "NotStarted"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"

