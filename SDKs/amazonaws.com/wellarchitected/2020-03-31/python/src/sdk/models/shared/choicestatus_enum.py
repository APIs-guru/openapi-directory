from dataclasses import dataclass, field
from typing import Enum

class ChoiceStatusEnum(str, Enum):
    SELECTED = "SELECTED"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    UNSELECTED = "UNSELECTED"

