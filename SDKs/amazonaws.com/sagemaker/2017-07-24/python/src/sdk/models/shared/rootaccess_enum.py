from dataclasses import dataclass, field
from enum import Enum

class RootAccessEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

