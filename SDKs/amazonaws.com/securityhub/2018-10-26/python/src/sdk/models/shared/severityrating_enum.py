from dataclasses import dataclass, field
from typing import Enum

class SeverityRatingEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

