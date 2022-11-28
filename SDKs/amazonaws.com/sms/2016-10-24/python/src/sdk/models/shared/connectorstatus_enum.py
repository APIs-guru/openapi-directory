from dataclasses import dataclass, field
from enum import Enum

class ConnectorStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

