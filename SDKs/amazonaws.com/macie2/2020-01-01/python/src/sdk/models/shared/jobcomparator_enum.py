from dataclasses import dataclass, field
from enum import Enum

class JobComparatorEnum(str, Enum):
    EQ = "EQ"
    GT = "GT"
    GTE = "GTE"
    LT = "LT"
    LTE = "LTE"
    NE = "NE"
    CONTAINS = "CONTAINS"
    STARTS_WITH = "STARTS_WITH"

