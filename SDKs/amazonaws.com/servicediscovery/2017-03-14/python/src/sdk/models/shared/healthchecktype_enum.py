from dataclasses import dataclass, field
from enum import Enum

class HealthCheckTypeEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"

