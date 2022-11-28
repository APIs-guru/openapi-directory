from dataclasses import dataclass, field
from enum import Enum

class ClusterStateEnum(str, Enum):
    AWAITING_QUORUM = "AwaitingQuorum"
    PENDING = "Pending"
    IN_USE = "InUse"
    COMPLETE = "Complete"
    CANCELLED = "Cancelled"

