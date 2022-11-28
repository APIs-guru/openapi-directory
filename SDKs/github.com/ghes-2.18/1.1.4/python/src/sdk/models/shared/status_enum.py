from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

