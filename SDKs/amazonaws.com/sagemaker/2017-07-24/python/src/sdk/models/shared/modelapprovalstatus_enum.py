from dataclasses import dataclass, field
from enum import Enum

class ModelApprovalStatusEnum(str, Enum):
    APPROVED = "Approved"
    REJECTED = "Rejected"
    PENDING_MANUAL_APPROVAL = "PendingManualApproval"

