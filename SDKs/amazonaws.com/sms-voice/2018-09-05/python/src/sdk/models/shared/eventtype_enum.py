from dataclasses import dataclass, field
from typing import Enum

class EventTypeEnum(str, Enum):
    INITIATED_CALL = "INITIATED_CALL"
    RINGING = "RINGING"
    ANSWERED = "ANSWERED"
    COMPLETED_CALL = "COMPLETED_CALL"
    BUSY = "BUSY"
    FAILED = "FAILED"
    NO_ANSWER = "NO_ANSWER"

