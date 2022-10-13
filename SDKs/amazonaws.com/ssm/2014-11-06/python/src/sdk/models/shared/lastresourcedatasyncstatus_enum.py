from dataclasses import dataclass, field
from typing import Enum

class LastResourceDataSyncStatusEnum(str, Enum):
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"

