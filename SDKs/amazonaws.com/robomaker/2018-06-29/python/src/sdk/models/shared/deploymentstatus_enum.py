from dataclasses import dataclass, field
from typing import Enum

class DeploymentStatusEnum(str, Enum):
    PENDING = "Pending"
    PREPARING = "Preparing"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"
    CANCELED = "Canceled"

