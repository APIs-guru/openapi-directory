from dataclasses import dataclass, field
from typing import Enum

class ClusterStateEnum(str, Enum):
    AWAITING_QUORUM = "AwaitingQuorum"
    PENDING = "Pending"
    IN_USE = "InUse"
    COMPLETE = "Complete"
    CANCELLED = "Cancelled"

