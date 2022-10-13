from dataclasses import dataclass, field
from typing import Enum

class TaskStateEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    COMPLETED = "COMPLETED"

