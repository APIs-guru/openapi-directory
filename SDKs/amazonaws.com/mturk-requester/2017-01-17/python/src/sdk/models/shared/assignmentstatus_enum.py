from dataclasses import dataclass, field
from typing import Enum

class AssignmentStatusEnum(str, Enum):
    SUBMITTED = "Submitted"
    APPROVED = "Approved"
    REJECTED = "Rejected"

