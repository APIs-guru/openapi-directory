from dataclasses import dataclass, field
from typing import Enum

class ContactMethodStatusEnum(str, Enum):
    PENDING_VERIFICATION = "PendingVerification"
    VALID = "Valid"
    INVALID = "Invalid"

