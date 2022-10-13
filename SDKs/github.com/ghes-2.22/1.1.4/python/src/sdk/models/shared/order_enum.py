from dataclasses import dataclass, field
from typing import Enum

class OrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

