from dataclasses import dataclass, field
from typing import Enum

class SnapshotStatusEnum(str, Enum):
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    FAILED = "FAILED"

