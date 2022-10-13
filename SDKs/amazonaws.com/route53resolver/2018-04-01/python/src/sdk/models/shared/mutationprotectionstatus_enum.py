from dataclasses import dataclass, field
from typing import Enum

class MutationProtectionStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

