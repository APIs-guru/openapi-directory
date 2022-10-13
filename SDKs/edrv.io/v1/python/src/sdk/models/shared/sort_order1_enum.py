from dataclasses import dataclass, field
from typing import Enum

class SortOrder1Enum(str, Enum):
    DESC = "desc"
    ASC = "asc"

