from dataclasses import dataclass, field
from enum import Enum

class OpsFilterOperatorTypeEnum(str, Enum):
    EQUAL = "Equal"
    NOT_EQUAL = "NotEqual"
    BEGIN_WITH = "BeginWith"
    LESS_THAN = "LessThan"
    GREATER_THAN = "GreaterThan"
    EXISTS = "Exists"

