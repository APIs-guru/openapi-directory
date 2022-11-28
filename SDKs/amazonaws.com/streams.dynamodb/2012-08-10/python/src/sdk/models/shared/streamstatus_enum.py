from dataclasses import dataclass, field
from enum import Enum

class StreamStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ENABLED = "ENABLED"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"

