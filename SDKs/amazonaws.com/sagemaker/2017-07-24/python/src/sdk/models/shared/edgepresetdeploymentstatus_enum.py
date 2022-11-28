from dataclasses import dataclass, field
from enum import Enum

class EdgePresetDeploymentStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

