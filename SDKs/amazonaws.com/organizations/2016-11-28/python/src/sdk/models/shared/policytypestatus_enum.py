from dataclasses import dataclass, field
from typing import Enum

class PolicyTypeStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    PENDING_ENABLE = "PENDING_ENABLE"
    PENDING_DISABLE = "PENDING_DISABLE"

