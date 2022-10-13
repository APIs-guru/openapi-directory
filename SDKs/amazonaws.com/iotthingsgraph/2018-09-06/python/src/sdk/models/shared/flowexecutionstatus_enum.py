from dataclasses import dataclass, field
from typing import Enum

class FlowExecutionStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    ABORTED = "ABORTED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

