from dataclasses import dataclass, field
from enum import Enum

class TableStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

