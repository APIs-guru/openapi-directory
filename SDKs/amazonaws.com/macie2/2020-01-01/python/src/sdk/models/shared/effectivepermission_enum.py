from dataclasses import dataclass, field
from typing import Enum

class EffectivePermissionEnum(str, Enum):
    PUBLIC = "PUBLIC"
    NOT_PUBLIC = "NOT_PUBLIC"
    UNKNOWN = "UNKNOWN"

