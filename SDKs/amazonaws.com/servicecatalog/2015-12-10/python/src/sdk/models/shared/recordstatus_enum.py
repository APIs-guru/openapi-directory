from dataclasses import dataclass, field
from typing import Enum

class RecordStatusEnum(str, Enum):
    CREATED = "CREATED"
    IN_PROGRESS = "IN_PROGRESS"
    IN_PROGRESS_IN_ERROR = "IN_PROGRESS_IN_ERROR"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

