from dataclasses import dataclass, field
from enum import Enum

class SortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

