from dataclasses import dataclass, field
from typing import Enum

class StatusTypeEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

