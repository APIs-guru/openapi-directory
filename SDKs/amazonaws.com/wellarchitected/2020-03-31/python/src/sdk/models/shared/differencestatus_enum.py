from dataclasses import dataclass, field
from typing import Enum

class DifferenceStatusEnum(str, Enum):
    UPDATED = "UPDATED"
    NEW = "NEW"
    DELETED = "DELETED"

