from dataclasses import dataclass, field
from typing import Enum

class RuleTypeOptionEnum(str, Enum):
    FORWARD = "FORWARD"
    SYSTEM = "SYSTEM"
    RECURSIVE = "RECURSIVE"

