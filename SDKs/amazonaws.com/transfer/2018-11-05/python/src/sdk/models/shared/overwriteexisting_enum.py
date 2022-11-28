from dataclasses import dataclass, field
from enum import Enum

class OverwriteExistingEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"

