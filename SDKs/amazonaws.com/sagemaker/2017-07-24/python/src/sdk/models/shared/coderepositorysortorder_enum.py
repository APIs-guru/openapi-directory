from dataclasses import dataclass, field
from typing import Enum

class CodeRepositorySortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

