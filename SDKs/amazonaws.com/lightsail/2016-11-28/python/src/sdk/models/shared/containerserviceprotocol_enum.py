from dataclasses import dataclass, field
from typing import Enum

class ContainerServiceProtocolEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"
    UDP = "UDP"

