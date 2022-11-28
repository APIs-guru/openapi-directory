from dataclasses import dataclass, field
from enum import Enum

class ReplicationSetStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

