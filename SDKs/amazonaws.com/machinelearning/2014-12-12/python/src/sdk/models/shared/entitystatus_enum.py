from dataclasses import dataclass, field
from enum import Enum

class EntityStatusEnum(str, Enum):
    PENDING = "PENDING"
    INPROGRESS = "INPROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    DELETED = "DELETED"

