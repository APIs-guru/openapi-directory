from dataclasses import dataclass, field
from typing import Enum

class WorldExportJobStatusEnum(str, Enum):
    PENDING = "Pending"
    RUNNING = "Running"
    COMPLETED = "Completed"
    FAILED = "Failed"
    CANCELING = "Canceling"
    CANCELED = "Canceled"

