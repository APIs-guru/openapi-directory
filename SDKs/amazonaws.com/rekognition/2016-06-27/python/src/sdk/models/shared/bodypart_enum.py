from dataclasses import dataclass, field
from typing import Enum

class BodyPartEnum(str, Enum):
    FACE = "FACE"
    HEAD = "HEAD"
    LEFT_HAND = "LEFT_HAND"
    RIGHT_HAND = "RIGHT_HAND"

