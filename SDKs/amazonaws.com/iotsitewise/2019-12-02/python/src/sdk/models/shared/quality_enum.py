from dataclasses import dataclass, field
from typing import Enum

class QualityEnum(str, Enum):
    GOOD = "GOOD"
    BAD = "BAD"
    UNCERTAIN = "UNCERTAIN"

