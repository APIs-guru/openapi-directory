from dataclasses import dataclass, field
from typing import Enum

class AdminStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS"

