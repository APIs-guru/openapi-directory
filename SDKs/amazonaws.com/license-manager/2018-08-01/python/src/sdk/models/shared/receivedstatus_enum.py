from dataclasses import dataclass, field
from typing import Enum

class ReceivedStatusEnum(str, Enum):
    PENDING_WORKFLOW = "PENDING_WORKFLOW"
    PENDING_ACCEPT = "PENDING_ACCEPT"
    REJECTED = "REJECTED"
    ACTIVE = "ACTIVE"
    FAILED_WORKFLOW = "FAILED_WORKFLOW"
    DELETED = "DELETED"
    DISABLED = "DISABLED"
    WORKFLOW_COMPLETED = "WORKFLOW_COMPLETED"

