from dataclasses import dataclass, field
from typing import Enum

class PipelineExecutionStatusEnum(str, Enum):
    EXECUTING = "Executing"
    STOPPING = "Stopping"
    STOPPED = "Stopped"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

