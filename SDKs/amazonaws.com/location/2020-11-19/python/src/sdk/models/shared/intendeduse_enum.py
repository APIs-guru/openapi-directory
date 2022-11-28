from dataclasses import dataclass, field
from enum import Enum

class IntendedUseEnum(str, Enum):
    SINGLE_USE = "SingleUse"
    STORAGE = "Storage"

