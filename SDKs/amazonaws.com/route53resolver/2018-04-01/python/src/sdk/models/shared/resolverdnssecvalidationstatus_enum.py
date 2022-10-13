from dataclasses import dataclass, field
from typing import Enum

class ResolverDnssecValidationStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ENABLED = "ENABLED"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"

