from dataclasses import dataclass, field
from enum import Enum

class NotifyWorkersFailureCodeEnum(str, Enum):
    SOFT_FAILURE = "SoftFailure"
    HARD_FAILURE = "HardFailure"

