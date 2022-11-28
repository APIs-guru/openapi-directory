from dataclasses import dataclass, field
from enum import Enum

class ListOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

