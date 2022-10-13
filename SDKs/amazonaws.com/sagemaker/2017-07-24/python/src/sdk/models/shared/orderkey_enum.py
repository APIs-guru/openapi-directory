from dataclasses import dataclass, field
from typing import Enum

class OrderKeyEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

