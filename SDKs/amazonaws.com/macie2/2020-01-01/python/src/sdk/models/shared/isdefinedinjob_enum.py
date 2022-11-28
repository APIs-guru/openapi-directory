from dataclasses import dataclass, field
from enum import Enum

class IsDefinedInJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

