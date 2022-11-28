from dataclasses import dataclass, field
from enum import Enum

class QualityEnum(str, Enum):
    GOOD = "GOOD"
    BAD = "BAD"
    UNCERTAIN = "UNCERTAIN"

