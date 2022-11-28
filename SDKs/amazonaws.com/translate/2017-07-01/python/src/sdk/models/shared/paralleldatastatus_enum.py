from dataclasses import dataclass, field
from enum import Enum

class ParallelDataStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"

