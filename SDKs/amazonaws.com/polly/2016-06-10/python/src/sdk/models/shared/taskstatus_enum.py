from dataclasses import dataclass, field
from typing import Enum

class TaskStatusEnum(str, Enum):
    SCHEDULED = "scheduled"
    IN_PROGRESS = "inProgress"
    COMPLETED = "completed"
    FAILED = "failed"

