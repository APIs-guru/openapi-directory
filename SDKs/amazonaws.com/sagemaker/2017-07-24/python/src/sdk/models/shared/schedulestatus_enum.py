from dataclasses import dataclass, field
from enum import Enum

class ScheduleStatusEnum(str, Enum):
    PENDING = "Pending"
    FAILED = "Failed"
    SCHEDULED = "Scheduled"
    STOPPED = "Stopped"

