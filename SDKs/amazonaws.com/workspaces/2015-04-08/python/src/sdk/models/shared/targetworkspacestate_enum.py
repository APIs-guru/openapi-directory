from dataclasses import dataclass, field
from typing import Enum

class TargetWorkspaceStateEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE"

