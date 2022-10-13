from dataclasses import dataclass, field
from typing import Enum

class OrderByEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

