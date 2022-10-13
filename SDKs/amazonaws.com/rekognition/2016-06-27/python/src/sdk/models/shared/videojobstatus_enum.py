from dataclasses import dataclass, field
from typing import Enum

class VideoJobStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

