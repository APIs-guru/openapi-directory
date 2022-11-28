from dataclasses import dataclass, field
from enum import Enum

class ValidationStatusEnum(str, Enum):
    READY_FOR_VALIDATION = "READY_FOR_VALIDATION"
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

