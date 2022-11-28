from dataclasses import dataclass, field
from enum import Enum

class MutationProtectionStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

