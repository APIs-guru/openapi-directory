from dataclasses import dataclass, field
from typing import Enum

class HealthStatusFilterEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    ALL = "ALL"
    HEALTHY_OR_ELSE_ALL = "HEALTHY_OR_ELSE_ALL"

