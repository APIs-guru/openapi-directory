from dataclasses import dataclass, field
from enum import Enum

class FilterTypeEnum(str, Enum):
    TERM_MATCH = "TERM_MATCH"

