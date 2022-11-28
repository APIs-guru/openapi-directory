from dataclasses import dataclass, field
from enum import Enum

class RealtimeEndpointStatusEnum(str, Enum):
    NONE = "NONE"
    READY = "READY"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

