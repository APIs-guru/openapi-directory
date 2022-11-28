from dataclasses import dataclass, field
from enum import Enum

class DirectInternetAccessEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

