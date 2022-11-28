from dataclasses import dataclass, field
from enum import Enum

class RecencyTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

