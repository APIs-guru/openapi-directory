from dataclasses import dataclass, field
from enum import Enum

class ResourceShareStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    DELETED = "DELETED"

