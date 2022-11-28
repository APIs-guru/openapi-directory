from dataclasses import dataclass, field
from enum import Enum

class SeverityRatingEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

