from dataclasses import dataclass, field
from enum import Enum

class SignalTypeEnum(str, Enum):
    APPROVE = "Approve"
    REJECT = "Reject"
    START_STEP = "StartStep"
    STOP_STEP = "StopStep"
    RESUME = "Resume"

