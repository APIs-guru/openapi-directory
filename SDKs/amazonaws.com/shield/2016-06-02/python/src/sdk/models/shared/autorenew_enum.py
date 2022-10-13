from dataclasses import dataclass, field
from typing import Enum

class AutoRenewEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

