from dataclasses import dataclass, field
from enum import Enum

class LastResourceDataSyncStatusEnum(str, Enum):
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"

