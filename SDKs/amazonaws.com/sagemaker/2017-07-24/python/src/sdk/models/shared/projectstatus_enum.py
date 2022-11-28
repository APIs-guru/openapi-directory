from dataclasses import dataclass, field
from enum import Enum

class ProjectStatusEnum(str, Enum):
    PENDING = "Pending"
    CREATE_IN_PROGRESS = "CreateInProgress"
    CREATE_COMPLETED = "CreateCompleted"
    CREATE_FAILED = "CreateFailed"
    DELETE_IN_PROGRESS = "DeleteInProgress"
    DELETE_FAILED = "DeleteFailed"
    DELETE_COMPLETED = "DeleteCompleted"

