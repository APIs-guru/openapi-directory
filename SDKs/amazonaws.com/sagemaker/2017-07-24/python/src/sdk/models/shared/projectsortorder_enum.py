from dataclasses import dataclass, field
from enum import Enum

class ProjectSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

