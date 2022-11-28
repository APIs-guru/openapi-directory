from dataclasses import dataclass, field
from enum import Enum

class DbProxyEndpointStatusEnum(str, Enum):
    AVAILABLE = "available"
    MODIFYING = "modifying"
    INCOMPATIBLE_NETWORK = "incompatible-network"
    INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits"
    CREATING = "creating"
    DELETING = "deleting"

