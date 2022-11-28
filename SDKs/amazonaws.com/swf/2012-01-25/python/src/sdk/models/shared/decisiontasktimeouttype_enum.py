from dataclasses import dataclass, field
from enum import Enum

class DecisionTaskTimeoutTypeEnum(str, Enum):
    START_TO_CLOSE = "START_TO_CLOSE"

