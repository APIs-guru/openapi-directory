from dataclasses import dataclass, field
from enum import Enum

class ComparisonOperatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"
    LE = "LE"
    LT = "LT"
    GE = "GE"
    GT = "GT"

