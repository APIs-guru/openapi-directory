from dataclasses import dataclass, field
from typing import Enum

class ShareStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    PENDING = "PENDING"
    REVOKED = "REVOKED"
    EXPIRED = "EXPIRED"

