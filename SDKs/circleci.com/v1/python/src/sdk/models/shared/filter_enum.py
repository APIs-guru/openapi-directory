from dataclasses import dataclass, field
from enum import Enum

class FilterEnum(str, Enum):
    COMPLETED = "completed"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    RUNNING = "running"

