from dataclasses import dataclass, field
from typing import Enum

class CarCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"
    CERTIFIED = "certified"

