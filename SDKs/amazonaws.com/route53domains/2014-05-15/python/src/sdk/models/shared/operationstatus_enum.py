from dataclasses import dataclass, field
from enum import Enum

class OperationStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    ERROR = "ERROR"
    SUCCESSFUL = "SUCCESSFUL"
    FAILED = "FAILED"

