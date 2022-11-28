from dataclasses import dataclass, field
from enum import Enum

class CopyProductStatusEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"

