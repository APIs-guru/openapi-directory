from dataclasses import dataclass, field
from typing import Enum

class ControlStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

