from dataclasses import dataclass, field
from enum import Enum

class ProactiveEngagementStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING = "PENDING"

