from dataclasses import dataclass, field
from typing import Enum

class DiskSnapshotStateEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    ERROR = "error"
    UNKNOWN = "unknown"

