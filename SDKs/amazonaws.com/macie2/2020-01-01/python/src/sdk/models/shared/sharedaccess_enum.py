from dataclasses import dataclass, field
from enum import Enum

class SharedAccessEnum(str, Enum):
    EXTERNAL = "EXTERNAL"
    INTERNAL = "INTERNAL"
    NOT_SHARED = "NOT_SHARED"
    UNKNOWN = "UNKNOWN"

