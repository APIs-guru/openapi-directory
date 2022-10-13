from dataclasses import dataclass, field
from typing import Enum

class ProductStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

