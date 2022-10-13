from dataclasses import dataclass, field
from typing import Enum

class ScheduleStatusEnum(str, Enum):
    PENDING = "Pending"
    FAILED = "Failed"
    SCHEDULED = "Scheduled"
    STOPPED = "Stopped"

