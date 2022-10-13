from dataclasses import dataclass, field
from typing import Enum

class FilterEnum(str, Enum):
    LOCAL = "local"
    ALL_LOCAL = "all-local"

