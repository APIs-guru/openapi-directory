from dataclasses import dataclass, field
from enum import Enum

class ArchitectureEnum(str, Enum):
    X86_64 = "x86_64"
    I386 = "i386"

