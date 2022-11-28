from dataclasses import dataclass, field
from enum import Enum

class ReplicationJobStateEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    DELETED = "DELETED"
    COMPLETED = "COMPLETED"
    PAUSED_ON_FAILURE = "PAUSED_ON_FAILURE"
    FAILING = "FAILING"

