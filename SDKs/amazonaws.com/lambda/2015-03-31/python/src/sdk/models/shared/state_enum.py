from dataclasses import dataclass, field
from typing import Enum

class StateEnum(str, Enum):
    PENDING = "Pending"
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    FAILED = "Failed"

