from dataclasses import dataclass, field
from enum import Enum

class AssociationFilterOperatorTypeEnum(str, Enum):
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"

