from dataclasses import dataclass, field
from enum import Enum

class OrderKeyEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

