from dataclasses import dataclass, field
from typing import Enum

class LoadBalancerProtocolEnum(str, Enum):
    HTTP_HTTPS = "HTTP_HTTPS"
    HTTP = "HTTP"

