from dataclasses import dataclass, field
from typing import Enum

class WorkflowStateEnum(str, Enum):
    NEW = "NEW"
    ASSIGNED = "ASSIGNED"
    IN_PROGRESS = "IN_PROGRESS"
    DEFERRED = "DEFERRED"
    RESOLVED = "RESOLVED"

