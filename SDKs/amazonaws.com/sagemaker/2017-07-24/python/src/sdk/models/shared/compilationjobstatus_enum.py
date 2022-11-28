from dataclasses import dataclass, field
from enum import Enum

class CompilationJobStatusEnum(str, Enum):
    INPROGRESS = "INPROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

