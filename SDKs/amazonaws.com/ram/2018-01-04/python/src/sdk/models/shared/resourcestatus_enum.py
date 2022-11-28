from dataclasses import dataclass, field
from enum import Enum

class ResourceStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    ZONAL_RESOURCE_INACCESSIBLE = "ZONAL_RESOURCE_INACCESSIBLE"
    LIMIT_EXCEEDED = "LIMIT_EXCEEDED"
    UNAVAILABLE = "UNAVAILABLE"
    PENDING = "PENDING"

