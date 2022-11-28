from dataclasses import dataclass, field
from enum import Enum

class ButtonActionEnum(str, Enum):
    LINK = "LINK"
    DEEP_LINK = "DEEP_LINK"
    CLOSE = "CLOSE"

