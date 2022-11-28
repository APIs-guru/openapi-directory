from dataclasses import dataclass, field
from enum import Enum

class MacieStatusEnum(str, Enum):
    PAUSED = "PAUSED"
    ENABLED = "ENABLED"

