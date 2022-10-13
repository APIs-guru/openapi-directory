from dataclasses import dataclass, field
from typing import Enum

class InstanceSnapshotStateEnum(str, Enum):
    PENDING = "pending"
    ERROR = "error"
    AVAILABLE = "available"

