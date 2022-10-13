from dataclasses import dataclass, field
from typing import Enum

class RootAccessEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

