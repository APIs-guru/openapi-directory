from dataclasses import dataclass, field
from enum import Enum

class SortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

