from dataclasses import dataclass, field
from enum import Enum

class TargetStateEnum(str, Enum):
    REGISTERING = "REGISTERING"
    AVAILABLE = "AVAILABLE"
    UNAVAILABLE = "UNAVAILABLE"

