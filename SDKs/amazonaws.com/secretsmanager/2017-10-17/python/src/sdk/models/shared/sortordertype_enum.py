from dataclasses import dataclass, field
from enum import Enum

class SortOrderTypeEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

