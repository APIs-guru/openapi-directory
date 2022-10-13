from dataclasses import dataclass, field
from typing import Enum,List

class SuppressionListReasonEnum(str, Enum):
    BOUNCE = "BOUNCE"
    COMPLAINT = "COMPLAINT"

