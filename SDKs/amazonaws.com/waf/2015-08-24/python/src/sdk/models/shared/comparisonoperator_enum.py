from dataclasses import dataclass, field
from typing import Enum

class ComparisonOperatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"
    LE = "LE"
    LT = "LT"
    GE = "GE"
    GT = "GT"

