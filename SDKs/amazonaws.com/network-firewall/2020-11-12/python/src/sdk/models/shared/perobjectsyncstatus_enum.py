from dataclasses import dataclass, field
from typing import Enum

class PerObjectSyncStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_SYNC = "IN_SYNC"

