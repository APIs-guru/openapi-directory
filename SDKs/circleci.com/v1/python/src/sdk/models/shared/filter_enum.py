from dataclasses import dataclass, field
from typing import Enum

class FilterEnum(str, Enum):
    COMPLETED = "completed"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    RUNNING = "running"

