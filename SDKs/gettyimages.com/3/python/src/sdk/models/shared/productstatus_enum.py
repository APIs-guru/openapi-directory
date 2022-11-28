from dataclasses import dataclass, field
from enum import Enum

class ProductStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

