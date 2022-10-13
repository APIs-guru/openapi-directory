from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

