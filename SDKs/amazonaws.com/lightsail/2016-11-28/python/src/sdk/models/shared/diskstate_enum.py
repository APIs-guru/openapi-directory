from dataclasses import dataclass, field
from typing import Enum

class DiskStateEnum(str, Enum):
    PENDING = "pending"
    ERROR = "error"
    AVAILABLE = "available"
    IN_USE = "in-use"
    UNKNOWN = "unknown"

