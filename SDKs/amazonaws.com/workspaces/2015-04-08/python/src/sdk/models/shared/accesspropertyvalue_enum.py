from dataclasses import dataclass, field
from enum import Enum

class AccessPropertyValueEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

