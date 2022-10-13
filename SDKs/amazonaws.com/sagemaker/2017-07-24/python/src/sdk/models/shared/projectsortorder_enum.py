from dataclasses import dataclass, field
from typing import Enum

class ProjectSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

