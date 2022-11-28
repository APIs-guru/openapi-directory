from dataclasses import dataclass, field
from enum import Enum

class CarCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"
    CERTIFIED = "certified"

