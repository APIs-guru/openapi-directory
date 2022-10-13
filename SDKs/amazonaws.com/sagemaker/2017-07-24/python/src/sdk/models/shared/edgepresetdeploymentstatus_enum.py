from dataclasses import dataclass, field
from typing import Enum

class EdgePresetDeploymentStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

