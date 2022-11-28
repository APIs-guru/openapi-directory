from dataclasses import dataclass, field
from enum import Enum

class ImportStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

