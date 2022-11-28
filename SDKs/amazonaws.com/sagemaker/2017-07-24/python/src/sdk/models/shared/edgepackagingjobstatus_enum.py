from dataclasses import dataclass, field
from enum import Enum

class EdgePackagingJobStatusEnum(str, Enum):
    STARTING = "STARTING"
    INPROGRESS = "INPROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

