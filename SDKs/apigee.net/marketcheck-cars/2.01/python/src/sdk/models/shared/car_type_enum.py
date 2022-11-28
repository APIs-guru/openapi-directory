from dataclasses import dataclass, field
from enum import Enum

class CarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

