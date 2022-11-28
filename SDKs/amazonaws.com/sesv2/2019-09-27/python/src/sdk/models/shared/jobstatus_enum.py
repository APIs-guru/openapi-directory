from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    CREATED = "CREATED"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

