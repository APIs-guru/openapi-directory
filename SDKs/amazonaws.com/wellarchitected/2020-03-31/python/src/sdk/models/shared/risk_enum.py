from dataclasses import dataclass, field
from typing import Enum

class RiskEnum(str, Enum):
    UNANSWERED = "UNANSWERED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    NONE = "NONE"
    NOT_APPLICABLE = "NOT_APPLICABLE"

