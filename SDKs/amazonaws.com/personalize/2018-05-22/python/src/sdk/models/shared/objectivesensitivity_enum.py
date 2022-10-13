from dataclasses import dataclass, field
from typing import Enum

class ObjectiveSensitivityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    OFF = "OFF"

