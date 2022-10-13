from dataclasses import dataclass, field
from typing import Enum

class WafActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    ALLOW = "ALLOW"
    COUNT = "COUNT"

