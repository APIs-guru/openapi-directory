from dataclasses import dataclass, field
from enum import Enum

class ContactMethodStatusEnum(str, Enum):
    PENDING_VERIFICATION = "PendingVerification"
    VALID = "Valid"
    INVALID = "Invalid"

