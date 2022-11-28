from dataclasses import dataclass, field
from enum import Enum

class ObjectiveSensitivityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    OFF = "OFF"

