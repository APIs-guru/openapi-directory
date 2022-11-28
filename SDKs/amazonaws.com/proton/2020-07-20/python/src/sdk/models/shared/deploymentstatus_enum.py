from dataclasses import dataclass, field
from enum import Enum

class DeploymentStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    DELETE_FAILED = "DELETE_FAILED"
    DELETE_COMPLETE = "DELETE_COMPLETE"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"

