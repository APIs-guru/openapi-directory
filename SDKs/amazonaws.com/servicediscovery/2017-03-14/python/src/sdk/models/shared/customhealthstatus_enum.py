from dataclasses import dataclass, field
from typing import Enum

class CustomHealthStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

