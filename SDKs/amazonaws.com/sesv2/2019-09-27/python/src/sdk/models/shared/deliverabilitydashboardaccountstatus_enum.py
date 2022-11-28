from dataclasses import dataclass, field
from enum import Enum

class DeliverabilityDashboardAccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING_EXPIRATION = "PENDING_EXPIRATION"
    DISABLED = "DISABLED"

