from dataclasses import dataclass, field
from typing import Enum

class CanaryRunStateReasonCodeEnum(str, Enum):
    CANARY_FAILURE = "CANARY_FAILURE"
    EXECUTION_FAILURE = "EXECUTION_FAILURE"

