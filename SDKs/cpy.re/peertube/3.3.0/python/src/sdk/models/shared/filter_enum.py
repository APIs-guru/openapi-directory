from dataclasses import dataclass, field
from enum import Enum

class FilterEnum(str, Enum):
    LOCAL = "local"
    ALL_LOCAL = "all-local"

