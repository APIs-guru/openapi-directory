from dataclasses import dataclass, field
from enum import Enum

class RuleTypeOptionEnum(str, Enum):
    FORWARD = "FORWARD"
    SYSTEM = "SYSTEM"
    RECURSIVE = "RECURSIVE"

