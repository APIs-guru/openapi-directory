from dataclasses import dataclass, field
from typing import Enum

class HealthCheckTypeEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"

