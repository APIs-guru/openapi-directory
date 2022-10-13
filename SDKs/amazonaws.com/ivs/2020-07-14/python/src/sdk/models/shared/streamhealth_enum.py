from dataclasses import dataclass, field
from typing import Enum

class StreamHealthEnum(str, Enum):
    HEALTHY = "HEALTHY"
    STARVING = "STARVING"
    UNKNOWN = "UNKNOWN"

