from dataclasses import dataclass, field
from typing import Enum

class JobStatusEnum(str, Enum):
    PENDING = "PENDING"
    STARTED = "STARTED"
    COMPLETED = "COMPLETED"

