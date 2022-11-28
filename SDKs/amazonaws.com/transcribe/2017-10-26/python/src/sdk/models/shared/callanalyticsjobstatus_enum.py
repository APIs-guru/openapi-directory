from dataclasses import dataclass, field
from enum import Enum

class CallAnalyticsJobStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

