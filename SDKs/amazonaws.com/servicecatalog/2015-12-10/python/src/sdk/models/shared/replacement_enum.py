from dataclasses import dataclass, field
from enum import Enum

class ReplacementEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

