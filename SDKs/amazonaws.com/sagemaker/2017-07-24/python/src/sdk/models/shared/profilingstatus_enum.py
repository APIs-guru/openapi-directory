from dataclasses import dataclass, field
from typing import Enum

class ProfilingStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

