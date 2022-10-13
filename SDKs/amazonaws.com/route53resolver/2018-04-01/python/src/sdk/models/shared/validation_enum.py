from dataclasses import dataclass, field
from typing import Enum

class ValidationEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

