from dataclasses import dataclass, field
from enum import Enum

class AccessStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    UNDER_CHANGE = "UNDER_CHANGE"
    DISABLED = "DISABLED"

