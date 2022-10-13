from dataclasses import dataclass, field
from typing import Enum

class ShippingLabelStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    TIMED_OUT = "TimedOut"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

