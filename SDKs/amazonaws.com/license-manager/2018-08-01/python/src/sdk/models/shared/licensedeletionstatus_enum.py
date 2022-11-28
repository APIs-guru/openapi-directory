from dataclasses import dataclass, field
from enum import Enum

class LicenseDeletionStatusEnum(str, Enum):
    PENDING_DELETE = "PENDING_DELETE"
    DELETED = "DELETED"

