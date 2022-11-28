from dataclasses import dataclass, field
from enum import Enum

class RegionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

