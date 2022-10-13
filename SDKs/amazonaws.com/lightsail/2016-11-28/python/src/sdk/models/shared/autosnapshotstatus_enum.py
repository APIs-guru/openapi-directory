from dataclasses import dataclass, field
from typing import Enum

class AutoSnapshotStatusEnum(str, Enum):
    SUCCESS = "Success"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"
    NOT_FOUND = "NotFound"

