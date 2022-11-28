from dataclasses import dataclass, field
from enum import Enum

class StandardsStatusEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"
    DELETING = "DELETING"
    INCOMPLETE = "INCOMPLETE"

