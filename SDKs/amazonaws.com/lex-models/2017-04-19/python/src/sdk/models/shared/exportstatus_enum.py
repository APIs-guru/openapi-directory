from dataclasses import dataclass, field
from typing import Enum

class ExportStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    READY = "READY"
    FAILED = "FAILED"

