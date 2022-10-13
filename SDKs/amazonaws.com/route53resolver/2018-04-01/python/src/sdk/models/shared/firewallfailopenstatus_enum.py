from dataclasses import dataclass, field
from typing import Enum

class FirewallFailOpenStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

