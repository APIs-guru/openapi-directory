from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    PENDING = "PENDING"
    STARTED = "STARTED"
    COMPLETED = "COMPLETED"

