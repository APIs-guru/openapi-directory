from dataclasses import dataclass, field
from enum import Enum

class ModeEnum(str, Enum):
    STANDARD = "standard"
    HIGH_PERFORMANCE = "high-performance"

