from dataclasses import dataclass, field
from typing import Enum

class StandardsStatusEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"
    DELETING = "DELETING"
    INCOMPLETE = "INCOMPLETE"

