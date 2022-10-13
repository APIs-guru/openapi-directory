from dataclasses import dataclass, field
from typing import Enum

class HumanLoopStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    COMPLETED = "Completed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

