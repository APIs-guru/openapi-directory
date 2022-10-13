from dataclasses import dataclass, field
from typing import Enum

class OperationStatusEnum(str, Enum):
    NOT_STARTED = "NotStarted"
    STARTED = "Started"
    FAILED = "Failed"
    COMPLETED = "Completed"
    SUCCEEDED = "Succeeded"

