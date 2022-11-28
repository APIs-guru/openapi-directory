from dataclasses import dataclass, field
from enum import Enum

class SelectionStatusEnum(str, Enum):
    SELECTED = "SELECTED"
    NOT_SELECTED = "NOT_SELECTED"

