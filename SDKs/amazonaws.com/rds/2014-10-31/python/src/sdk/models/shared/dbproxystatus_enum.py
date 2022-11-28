from dataclasses import dataclass, field
from enum import Enum

class DbProxyStatusEnum(str, Enum):
    AVAILABLE = "available"
    MODIFYING = "modifying"
    INCOMPATIBLE_NETWORK = "incompatible-network"
    INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits"
    CREATING = "creating"
    DELETING = "deleting"
    SUSPENDED = "suspended"
    SUSPENDING = "suspending"
    REACTIVATING = "reactivating"

