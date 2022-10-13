from dataclasses import dataclass, field
from typing import Enum

class StringFilterComparisonEnum(str, Enum):
    EQUALS = "EQUALS"
    PREFIX = "PREFIX"
    NOT_EQUALS = "NOT_EQUALS"
    PREFIX_NOT_EQUALS = "PREFIX_NOT_EQUALS"

