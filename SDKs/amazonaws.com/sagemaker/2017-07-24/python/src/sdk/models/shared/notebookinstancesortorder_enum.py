from dataclasses import dataclass, field
from enum import Enum

class NotebookInstanceSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

