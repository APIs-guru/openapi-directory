from dataclasses import dataclass, field
from enum import Enum

class ComparisonOperatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"
    LE = "LE"
    LT = "LT"
    GE = "GE"
    GT = "GT"
    CONTAINS = "CONTAINS"
    NOT_CONTAINS = "NOT_CONTAINS"
    BEGINS_WITH = "BEGINS_WITH"
    IN = "IN"
    BETWEEN = "BETWEEN"

