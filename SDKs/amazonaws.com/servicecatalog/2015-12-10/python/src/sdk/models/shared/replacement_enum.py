from dataclasses import dataclass, field
from typing import Enum

class ReplacementEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

