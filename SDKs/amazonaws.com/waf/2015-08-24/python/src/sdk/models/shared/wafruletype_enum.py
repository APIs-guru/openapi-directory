from dataclasses import dataclass, field
from enum import Enum

class WafRuleTypeEnum(str, Enum):
    REGULAR = "REGULAR"
    RATE_BASED = "RATE_BASED"
    GROUP = "GROUP"

