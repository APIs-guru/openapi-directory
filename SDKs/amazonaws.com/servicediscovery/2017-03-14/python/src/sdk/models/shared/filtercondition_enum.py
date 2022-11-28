from dataclasses import dataclass, field
from enum import Enum

class FilterConditionEnum(str, Enum):
    EQ = "EQ"
    IN = "IN"
    BETWEEN = "BETWEEN"

