from dataclasses import dataclass, field
from enum import Enum

class PerObjectSyncStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_SYNC = "IN_SYNC"

