from dataclasses import dataclass, field
from enum import Enum

class FirewallFailOpenStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

