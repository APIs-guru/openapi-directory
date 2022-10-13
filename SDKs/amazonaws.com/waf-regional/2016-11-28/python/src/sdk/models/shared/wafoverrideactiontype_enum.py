from dataclasses import dataclass, field
from typing import Enum

class WafOverrideActionTypeEnum(str, Enum):
    NONE = "NONE"
    COUNT = "COUNT"

