from dataclasses import dataclass, field
from typing import Enum

class IntendedUseEnum(str, Enum):
    SINGLE_USE = "SingleUse"
    STORAGE = "Storage"

