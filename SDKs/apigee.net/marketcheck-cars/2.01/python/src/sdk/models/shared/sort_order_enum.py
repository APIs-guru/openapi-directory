from dataclasses import dataclass, field
from enum import Enum

class SortOrderEnum(str, Enum):
    ASC_LOWER = "asc"
    DESC_LOWER = "desc"
    ASC_UPPER = "ASC"
    DESC_UPPER = "DESC"

