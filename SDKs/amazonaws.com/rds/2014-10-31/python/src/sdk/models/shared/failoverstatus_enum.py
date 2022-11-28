from dataclasses import dataclass, field
from enum import Enum

class FailoverStatusEnum(str, Enum):
    PENDING = "pending"
    FAILING_OVER = "failing-over"
    CANCELLING = "cancelling"

