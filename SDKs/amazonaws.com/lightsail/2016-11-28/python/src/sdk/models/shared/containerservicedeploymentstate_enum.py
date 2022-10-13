from dataclasses import dataclass, field
from typing import Enum

class ContainerServiceDeploymentStateEnum(str, Enum):
    ACTIVATING = "ACTIVATING"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    FAILED = "FAILED"

