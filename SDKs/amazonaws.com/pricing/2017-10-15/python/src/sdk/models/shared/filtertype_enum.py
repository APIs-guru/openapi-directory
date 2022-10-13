from dataclasses import dataclass, field
from typing import Enum

class FilterTypeEnum(str, Enum):
    TERM_MATCH = "TERM_MATCH"

