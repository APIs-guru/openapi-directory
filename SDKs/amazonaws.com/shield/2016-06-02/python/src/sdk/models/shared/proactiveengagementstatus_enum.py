from dataclasses import dataclass, field
from typing import Enum

class ProactiveEngagementStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING = "PENDING"

