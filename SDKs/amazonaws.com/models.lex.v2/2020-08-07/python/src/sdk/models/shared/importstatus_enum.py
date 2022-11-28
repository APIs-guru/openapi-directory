from dataclasses import dataclass, field
from enum import Enum

class ImportStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

