from dataclasses import dataclass, field
from typing import Enum

class RegionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

