from dataclasses import dataclass, field
from enum import Enum

class ClosestEnum(str, Enum):
    EITHER = "either"
    BEFORE = "before"
    AFTER = "after"

