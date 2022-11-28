from dataclasses import dataclass, field
from enum import Enum

class VideoJobStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

