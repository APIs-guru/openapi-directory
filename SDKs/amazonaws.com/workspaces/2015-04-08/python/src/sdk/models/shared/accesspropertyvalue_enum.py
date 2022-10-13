from dataclasses import dataclass, field
from typing import Enum

class AccessPropertyValueEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

