from dataclasses import dataclass, field
from enum import Enum

class ExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    EXCEPTION = "EXCEPTION"
    HANDLING_EXCEPTION = "HANDLING_EXCEPTION"

