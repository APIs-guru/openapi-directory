from dataclasses import dataclass, field
from enum import Enum

class AdminStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS"

