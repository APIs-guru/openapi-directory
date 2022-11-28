from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

