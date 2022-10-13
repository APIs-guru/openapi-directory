from dataclasses import dataclass, field
from typing import Enum

class InstanceHealthStateEnum(str, Enum):
    INITIAL = "initial"
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    UNUSED = "unused"
    DRAINING = "draining"
    UNAVAILABLE = "unavailable"

