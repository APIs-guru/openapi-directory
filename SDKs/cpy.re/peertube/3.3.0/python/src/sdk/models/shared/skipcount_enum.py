from dataclasses import dataclass, field
from enum import Enum

class SkipCountEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

