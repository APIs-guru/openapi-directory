from dataclasses import dataclass, field
from typing import Enum

class InventoryTypeEnum(str, Enum):
    USED = "used"
    NEW = "new"

