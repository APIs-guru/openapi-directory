from dataclasses import dataclass, field
from typing import Enum

class InventoryAttributeDataTypeEnum(str, Enum):
    STRING = "string"
    NUMBER = "number"

