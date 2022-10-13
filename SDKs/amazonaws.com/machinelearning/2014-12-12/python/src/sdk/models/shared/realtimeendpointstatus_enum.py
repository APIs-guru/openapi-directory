from dataclasses import dataclass, field
from typing import Enum

class RealtimeEndpointStatusEnum(str, Enum):
    NONE = "NONE"
    READY = "READY"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

