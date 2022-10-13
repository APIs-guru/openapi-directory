from dataclasses import dataclass, field
from typing import Enum

class CancelTimerFailedCauseEnum(str, Enum):
    TIMER_ID_UNKNOWN = "TIMER_ID_UNKNOWN"
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

