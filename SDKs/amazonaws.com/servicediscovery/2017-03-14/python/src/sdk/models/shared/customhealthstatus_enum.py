from dataclasses import dataclass, field
from enum import Enum

class CustomHealthStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

