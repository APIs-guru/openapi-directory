from dataclasses import dataclass, field
from enum import Enum

class ProfilingStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

