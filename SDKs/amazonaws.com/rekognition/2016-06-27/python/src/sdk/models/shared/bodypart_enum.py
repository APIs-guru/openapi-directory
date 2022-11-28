from dataclasses import dataclass, field
from enum import Enum

class BodyPartEnum(str, Enum):
    FACE = "FACE"
    HEAD = "HEAD"
    LEFT_HAND = "LEFT_HAND"
    RIGHT_HAND = "RIGHT_HAND"

