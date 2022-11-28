from dataclasses import dataclass, field
from enum import Enum

class ScheduleStateEnum(str, Enum):
    MODIFYING = "MODIFYING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"

