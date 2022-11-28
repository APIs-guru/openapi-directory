from dataclasses import dataclass, field
from enum import Enum

class ContainerServiceProtocolEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"
    UDP = "UDP"

