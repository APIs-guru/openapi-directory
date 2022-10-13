from dataclasses import dataclass, field
from typing import Enum

class SkipCountEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

