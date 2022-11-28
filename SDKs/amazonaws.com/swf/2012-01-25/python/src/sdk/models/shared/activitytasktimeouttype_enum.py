from dataclasses import dataclass, field
from enum import Enum

class ActivityTaskTimeoutTypeEnum(str, Enum):
    START_TO_CLOSE = "START_TO_CLOSE"
    SCHEDULE_TO_START = "SCHEDULE_TO_START"
    SCHEDULE_TO_CLOSE = "SCHEDULE_TO_CLOSE"
    HEARTBEAT = "HEARTBEAT"

