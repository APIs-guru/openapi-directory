from dataclasses import dataclass, field
from enum import Enum

class StepStatusEnum(str, Enum):
    STARTING = "Starting"
    EXECUTING = "Executing"
    STOPPING = "Stopping"
    STOPPED = "Stopped"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

