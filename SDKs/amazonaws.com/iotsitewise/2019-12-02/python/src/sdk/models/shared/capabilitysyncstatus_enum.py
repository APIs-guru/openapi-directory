from dataclasses import dataclass, field
from enum import Enum

class CapabilitySyncStatusEnum(str, Enum):
    IN_SYNC = "IN_SYNC"
    OUT_OF_SYNC = "OUT_OF_SYNC"
    SYNC_FAILED = "SYNC_FAILED"
    UNKNOWN = "UNKNOWN"

