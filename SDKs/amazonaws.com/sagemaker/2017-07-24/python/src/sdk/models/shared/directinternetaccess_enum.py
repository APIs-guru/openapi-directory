from dataclasses import dataclass, field
from typing import Enum

class DirectInternetAccessEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

