from dataclasses import dataclass, field
from enum import Enum

class InstancePatchStateOperatorTypeEnum(str, Enum):
    EQUAL = "Equal"
    NOT_EQUAL = "NotEqual"
    LESS_THAN = "LessThan"
    GREATER_THAN = "GreaterThan"

