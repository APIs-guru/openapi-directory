from dataclasses import dataclass, field
from typing import Enum

class NotifyWorkersFailureCodeEnum(str, Enum):
    SOFT_FAILURE = "SoftFailure"
    HARD_FAILURE = "HardFailure"

