from dataclasses import dataclass, field
from enum import Enum

class FlowExecutionStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    ABORTED = "ABORTED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

