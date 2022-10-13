from dataclasses import dataclass, field
from typing import Enum

class LaunchStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    LAUNCHED = "LAUNCHED"
    FAILED = "FAILED"
    TERMINATED = "TERMINATED"

