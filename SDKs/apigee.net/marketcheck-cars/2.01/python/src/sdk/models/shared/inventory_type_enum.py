from dataclasses import dataclass, field
from enum import Enum

class InventoryTypeEnum(str, Enum):
    USED = "used"
    NEW = "new"

