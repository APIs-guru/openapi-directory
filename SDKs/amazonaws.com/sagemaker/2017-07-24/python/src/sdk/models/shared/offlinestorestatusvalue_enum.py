from dataclasses import dataclass, field
from typing import Enum

class OfflineStoreStatusValueEnum(str, Enum):
    ACTIVE = "Active"
    BLOCKED = "Blocked"
    DISABLED = "Disabled"

