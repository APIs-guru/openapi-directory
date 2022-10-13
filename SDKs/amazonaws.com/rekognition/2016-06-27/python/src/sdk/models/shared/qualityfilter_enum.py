from dataclasses import dataclass, field
from typing import Enum

class QualityFilterEnum(str, Enum):
    NONE = "NONE"
    AUTO = "AUTO"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

