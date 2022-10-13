from dataclasses import dataclass, field
from typing import Enum

class RecencyTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

