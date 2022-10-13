from dataclasses import dataclass, field
from typing import Enum

class LastUpdateStatusEnum(str, Enum):
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"

