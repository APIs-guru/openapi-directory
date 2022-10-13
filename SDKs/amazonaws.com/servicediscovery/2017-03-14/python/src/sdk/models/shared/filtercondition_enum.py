from dataclasses import dataclass, field
from typing import Enum

class FilterConditionEnum(str, Enum):
    EQ = "EQ"
    IN = "IN"
    BETWEEN = "BETWEEN"

