from dataclasses import dataclass, field
from typing import Enum

class CarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

