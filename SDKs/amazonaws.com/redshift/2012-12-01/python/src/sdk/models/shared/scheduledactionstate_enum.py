from dataclasses import dataclass, field
from enum import Enum

class ScheduledActionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"

