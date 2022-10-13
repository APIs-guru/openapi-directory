from dataclasses import dataclass, field
from typing import Enum

class AttributeTypeEnum(str, Enum):
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"
    CONTAINS = "CONTAINS"
    BEFORE = "BEFORE"
    AFTER = "AFTER"
    ON = "ON"
    BETWEEN = "BETWEEN"

