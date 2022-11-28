from dataclasses import dataclass, field
from enum import Enum

class InventoryFilterConditionEnum(str, Enum):
    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    BEGINS_WITH = "BEGINS_WITH"
    CONTAINS = "CONTAINS"

