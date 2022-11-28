from dataclasses import dataclass, field
from enum import Enum

class WafActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    ALLOW = "ALLOW"
    COUNT = "COUNT"

