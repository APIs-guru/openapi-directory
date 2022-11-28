from dataclasses import dataclass, field
from enum import Enum

class ChoiceStatusEnum(str, Enum):
    SELECTED = "SELECTED"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    UNSELECTED = "UNSELECTED"

