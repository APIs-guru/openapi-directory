from dataclasses import dataclass, field
from typing import Enum

class ConnectorStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

