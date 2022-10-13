from dataclasses import dataclass, field
from typing import Enum

class NotebookInstanceSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

