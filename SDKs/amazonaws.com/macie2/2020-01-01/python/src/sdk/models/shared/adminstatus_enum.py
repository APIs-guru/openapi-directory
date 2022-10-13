from dataclasses import dataclass, field
from typing import Enum

class AdminStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS"

