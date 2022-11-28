from dataclasses import dataclass, field
from enum import Enum

class PatchDeploymentStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    PENDING_APPROVAL = "PENDING_APPROVAL"
    EXPLICIT_APPROVED = "EXPLICIT_APPROVED"
    EXPLICIT_REJECTED = "EXPLICIT_REJECTED"

