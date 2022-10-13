from dataclasses import dataclass, field
from typing import Enum

class LicenseDeletionStatusEnum(str, Enum):
    PENDING_DELETE = "PENDING_DELETE"
    DELETED = "DELETED"

