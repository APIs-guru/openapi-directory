from dataclasses import dataclass, field
from enum import Enum

class RenewalStatusEnum(str, Enum):
    PENDING_AUTO_RENEWAL = "PendingAutoRenewal"
    PENDING_VALIDATION = "PendingValidation"
    SUCCESS = "Success"
    FAILED = "Failed"

