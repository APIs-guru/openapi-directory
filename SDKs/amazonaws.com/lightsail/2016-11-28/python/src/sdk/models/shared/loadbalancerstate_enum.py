from dataclasses import dataclass, field
from typing import Enum

class LoadBalancerStateEnum(str, Enum):
    ACTIVE = "active"
    PROVISIONING = "provisioning"
    ACTIVE_IMPAIRED = "active_impaired"
    FAILED = "failed"
    UNKNOWN = "unknown"

