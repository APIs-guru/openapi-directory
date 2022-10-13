from dataclasses import dataclass, field
from typing import Enum

class EdgePackagingJobStatusEnum(str, Enum):
    STARTING = "STARTING"
    INPROGRESS = "INPROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

