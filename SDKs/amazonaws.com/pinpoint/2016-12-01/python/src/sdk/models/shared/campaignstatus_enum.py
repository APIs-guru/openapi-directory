from dataclasses import dataclass, field
from enum import Enum

class CampaignStatusEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    EXECUTING = "EXECUTING"
    PENDING_NEXT_RUN = "PENDING_NEXT_RUN"
    COMPLETED = "COMPLETED"
    PAUSED = "PAUSED"
    DELETED = "DELETED"
    INVALID = "INVALID"

