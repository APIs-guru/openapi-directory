from dataclasses import dataclass, field
from typing import Enum

class BooleanOperatorEnum(str, Enum):
    AND = "And"
    OR = "Or"

