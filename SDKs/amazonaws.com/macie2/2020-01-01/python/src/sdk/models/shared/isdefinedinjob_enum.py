from dataclasses import dataclass, field
from typing import Enum

class IsDefinedInJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

