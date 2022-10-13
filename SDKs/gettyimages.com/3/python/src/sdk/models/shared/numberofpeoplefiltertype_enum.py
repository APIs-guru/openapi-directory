from dataclasses import dataclass, field
from typing import Enum

class NumberOfPeopleFilterTypeEnum(str, Enum):
    NONE = "none"
    ONE = "one"
    TWO = "two"
    GROUP = "group"

