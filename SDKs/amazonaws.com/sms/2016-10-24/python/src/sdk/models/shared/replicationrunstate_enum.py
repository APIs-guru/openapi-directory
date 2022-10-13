from dataclasses import dataclass, field
from typing import Enum

class ReplicationRunStateEnum(str, Enum):
    PENDING = "PENDING"
    MISSED = "MISSED"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    DELETING = "DELETING"
    DELETED = "DELETED"

