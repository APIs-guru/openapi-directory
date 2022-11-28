from dataclasses import dataclass, field
from enum import Enum

class AssignmentStatusEnum(str, Enum):
    SUBMITTED = "Submitted"
    APPROVED = "Approved"
    REJECTED = "Rejected"

