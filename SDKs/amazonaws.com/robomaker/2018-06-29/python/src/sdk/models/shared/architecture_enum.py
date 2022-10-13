from dataclasses import dataclass, field
from typing import Enum

class ArchitectureEnum(str, Enum):
    X86_64 = "X86_64"
    ARM64 = "ARM64"
    ARMHF = "ARMHF"

