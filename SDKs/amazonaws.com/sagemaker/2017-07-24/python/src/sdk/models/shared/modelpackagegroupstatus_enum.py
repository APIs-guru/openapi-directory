from dataclasses import dataclass, field
from enum import Enum

class ModelPackageGroupStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"
    DELETE_FAILED = "DeleteFailed"

