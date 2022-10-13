from dataclasses import dataclass, field
from typing import Enum

class SortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

