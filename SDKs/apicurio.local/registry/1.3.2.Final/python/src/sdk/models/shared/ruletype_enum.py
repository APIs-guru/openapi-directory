from dataclasses import dataclass, field
from enum import Enum

class RuleTypeEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"

