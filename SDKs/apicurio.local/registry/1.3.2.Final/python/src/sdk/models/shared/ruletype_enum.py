from dataclasses import dataclass, field
from typing import Enum

class RuleTypeEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"

