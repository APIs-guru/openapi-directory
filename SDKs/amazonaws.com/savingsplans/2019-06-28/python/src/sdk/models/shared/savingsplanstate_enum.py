from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanStateEnum(str, Enum):
    PAYMENT_PENDING = "payment-pending"
    PAYMENT_FAILED = "payment-failed"
    ACTIVE = "active"
    RETIRED = "retired"
    QUEUED = "queued"
    QUEUED_DELETED = "queued-deleted"

