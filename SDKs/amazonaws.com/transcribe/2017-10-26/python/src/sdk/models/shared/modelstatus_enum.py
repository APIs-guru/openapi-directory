from dataclasses import dataclass, field
from typing import Enum

class ModelStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

