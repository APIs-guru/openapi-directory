from dataclasses import dataclass, field
from typing import Enum

class WorldGenerationJobStatusEnum(str, Enum):
    PENDING = "Pending"
    RUNNING = "Running"
    COMPLETED = "Completed"
    FAILED = "Failed"
    PARTIAL_FAILED = "PartialFailed"
    CANCELING = "Canceling"
    CANCELED = "Canceled"

