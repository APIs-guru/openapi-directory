from dataclasses import dataclass, field
from enum import Enum

class CodeRepositorySortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

