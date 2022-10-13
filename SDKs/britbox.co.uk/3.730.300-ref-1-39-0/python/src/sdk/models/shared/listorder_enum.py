from dataclasses import dataclass, field
from typing import Enum,List

class ListOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

