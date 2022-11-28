from dataclasses import dataclass, field
from enum import Enum

class StreamHealthEnum(str, Enum):
    HEALTHY = "HEALTHY"
    STARVING = "STARVING"
    UNKNOWN = "UNKNOWN"

