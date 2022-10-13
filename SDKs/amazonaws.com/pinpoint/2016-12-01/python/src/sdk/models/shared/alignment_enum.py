from dataclasses import dataclass, field
from typing import Enum

class AlignmentEnum(str, Enum):
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"

