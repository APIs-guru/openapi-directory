from dataclasses import dataclass, field
from enum import Enum

class ComparatorEnum(str, Enum):
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo"
    EQUAL_TO = "EqualTo"
    NOT_EQUAL_TO = "NotEqualTo"
    EXISTS = "Exists"
    DOES_NOT_EXIST = "DoesNotExist"
    IN = "In"
    NOT_IN = "NotIn"

