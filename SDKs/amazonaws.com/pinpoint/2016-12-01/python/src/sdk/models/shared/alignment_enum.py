from dataclasses import dataclass, field
from enum import Enum

class AlignmentEnum(str, Enum):
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"

