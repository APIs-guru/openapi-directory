from dataclasses import dataclass, field
from enum import Enum

class InventoryAttributeDataTypeEnum(str, Enum):
    STRING = "string"
    NUMBER = "number"

