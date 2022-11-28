from dataclasses import dataclass, field
from enum import Enum

class BooleanOperatorEnum(str, Enum):
    AND = "And"
    OR = "Or"

