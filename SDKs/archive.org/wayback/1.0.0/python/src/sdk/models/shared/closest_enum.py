from dataclasses import dataclass, field
from typing import Enum

class ClosestEnum(str, Enum):
    EITHER = "either"
    BEFORE = "before"
    AFTER = "after"

