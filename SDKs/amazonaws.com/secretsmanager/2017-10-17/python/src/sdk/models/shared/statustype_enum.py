from dataclasses import dataclass, field
from typing import Enum

class StatusTypeEnum(str, Enum):
    IN_SYNC = "InSync"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"

