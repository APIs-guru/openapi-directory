from dataclasses import dataclass, field
from typing import Enum

class EntityStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

