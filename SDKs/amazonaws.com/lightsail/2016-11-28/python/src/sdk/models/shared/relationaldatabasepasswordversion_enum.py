from dataclasses import dataclass, field
from typing import Enum

class RelationalDatabasePasswordVersionEnum(str, Enum):
    CURRENT = "CURRENT"
    PREVIOUS = "PREVIOUS"
    PENDING = "PENDING"

