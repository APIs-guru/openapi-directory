from dataclasses import dataclass, field
from enum import Enum

class InstanceSnapshotStateEnum(str, Enum):
    PENDING = "pending"
    ERROR = "error"
    AVAILABLE = "available"

