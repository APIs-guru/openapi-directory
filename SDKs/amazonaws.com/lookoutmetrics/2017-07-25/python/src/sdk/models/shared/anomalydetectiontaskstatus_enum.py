from dataclasses import dataclass, field
from enum import Enum

class AnomalyDetectionTaskStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    FAILED_TO_SCHEDULE = "FAILED_TO_SCHEDULE"

