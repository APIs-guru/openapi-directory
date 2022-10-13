from dataclasses import dataclass, field
from typing import Enum

class ExportTaskStatusCodeEnum(str, Enum):
    CANCELLED = "CANCELLED"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    PENDING = "PENDING"
    PENDING_CANCEL = "PENDING_CANCEL"
    RUNNING = "RUNNING"

