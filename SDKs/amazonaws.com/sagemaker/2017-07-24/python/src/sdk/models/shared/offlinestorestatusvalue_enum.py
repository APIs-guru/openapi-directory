from dataclasses import dataclass, field
from enum import Enum

class OfflineStoreStatusValueEnum(str, Enum):
    ACTIVE = "Active"
    BLOCKED = "Blocked"
    DISABLED = "Disabled"

