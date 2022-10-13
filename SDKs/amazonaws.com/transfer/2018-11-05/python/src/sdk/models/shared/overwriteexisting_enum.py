from dataclasses import dataclass, field
from typing import Enum

class OverwriteExistingEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"

