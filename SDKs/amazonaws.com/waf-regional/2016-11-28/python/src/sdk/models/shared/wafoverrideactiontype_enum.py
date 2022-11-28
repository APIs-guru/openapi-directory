from dataclasses import dataclass, field
from enum import Enum

class WafOverrideActionTypeEnum(str, Enum):
    NONE = "NONE"
    COUNT = "COUNT"

