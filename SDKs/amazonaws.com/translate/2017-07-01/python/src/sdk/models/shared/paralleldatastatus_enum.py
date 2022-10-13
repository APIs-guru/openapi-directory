from dataclasses import dataclass, field
from typing import Enum

class ParallelDataStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"

