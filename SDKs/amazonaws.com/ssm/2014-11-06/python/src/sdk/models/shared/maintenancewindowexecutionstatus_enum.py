from dataclasses import dataclass, field
from typing import Enum

class MaintenanceWindowExecutionStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SKIPPED_OVERLAPPING = "SKIPPED_OVERLAPPING"

