from dataclasses import dataclass, field
from typing import Enum

class OpsItemFilterOperatorEnum(str, Enum):
    EQUAL = "Equal"
    CONTAINS = "Contains"
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"

