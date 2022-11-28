from dataclasses import dataclass, field
from enum import Enum

class SuppressionListReasonEnum(str, Enum):
    BOUNCE = "BOUNCE"
    COMPLAINT = "COMPLAINT"

