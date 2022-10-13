from dataclasses import dataclass, field
from typing import Enum

class WarmupStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    DONE = "DONE"

