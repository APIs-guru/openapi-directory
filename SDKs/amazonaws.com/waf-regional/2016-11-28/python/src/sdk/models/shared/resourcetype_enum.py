from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER"
    API_GATEWAY = "API_GATEWAY"

