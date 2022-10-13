from dataclasses import dataclass, field
from typing import Enum

class TableStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

