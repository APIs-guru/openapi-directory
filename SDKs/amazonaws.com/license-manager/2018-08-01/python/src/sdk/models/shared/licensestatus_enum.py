from dataclasses import dataclass, field
from typing import Enum

class LicenseStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING_AVAILABLE = "PENDING_AVAILABLE"
    DEACTIVATED = "DEACTIVATED"
    SUSPENDED = "SUSPENDED"
    EXPIRED = "EXPIRED"
    PENDING_DELETE = "PENDING_DELETE"
    DELETED = "DELETED"

