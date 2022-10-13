from dataclasses import dataclass, field
from typing import Enum

class MacieStatusEnum(str, Enum):
    PAUSED = "PAUSED"
    ENABLED = "ENABLED"

