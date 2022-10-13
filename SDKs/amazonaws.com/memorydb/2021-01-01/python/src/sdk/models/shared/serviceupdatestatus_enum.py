from dataclasses import dataclass, field
from typing import Enum

class ServiceUpdateStatusEnum(str, Enum):
    AVAILABLE = "available"
    IN_PROGRESS = "in-progress"
    COMPLETE = "complete"
    SCHEDULED = "scheduled"

