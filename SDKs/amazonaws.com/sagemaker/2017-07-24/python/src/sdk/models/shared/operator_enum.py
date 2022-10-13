from dataclasses import dataclass, field
from typing import Enum

class OperatorEnum(str, Enum):
    EQUALS = "Equals"
    NOT_EQUALS = "NotEquals"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo"
    CONTAINS = "Contains"
    EXISTS = "Exists"
    NOT_EXISTS = "NotExists"
    IN = "In"

