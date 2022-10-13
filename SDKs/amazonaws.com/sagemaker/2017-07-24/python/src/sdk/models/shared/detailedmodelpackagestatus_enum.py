from dataclasses import dataclass, field
from typing import Enum

class DetailedModelPackageStatusEnum(str, Enum):
    NOT_STARTED = "NotStarted"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"

