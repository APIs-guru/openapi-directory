from dataclasses import dataclass, field
from enum import Enum

class PositionalConstraintEnum(str, Enum):
    EXACTLY = "EXACTLY"
    STARTS_WITH = "STARTS_WITH"
    ENDS_WITH = "ENDS_WITH"
    CONTAINS = "CONTAINS"
    CONTAINS_WORD = "CONTAINS_WORD"

