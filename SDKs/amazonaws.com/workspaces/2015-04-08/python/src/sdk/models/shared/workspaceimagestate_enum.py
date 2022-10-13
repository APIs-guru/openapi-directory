from dataclasses import dataclass, field
from typing import Enum

class WorkspaceImageStateEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    ERROR = "ERROR"

