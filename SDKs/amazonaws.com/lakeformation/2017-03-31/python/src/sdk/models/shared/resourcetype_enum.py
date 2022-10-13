from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    DATABASE = "DATABASE"
    TABLE = "TABLE"

