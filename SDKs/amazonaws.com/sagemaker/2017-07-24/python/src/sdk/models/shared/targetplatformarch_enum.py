from dataclasses import dataclass, field
from enum import Enum

class TargetPlatformArchEnum(str, Enum):
    X86_64 = "X86_64"
    X86 = "X86"
    ARM64 = "ARM64"
    ARM_EABI = "ARM_EABI"
    ARM_EABIHF = "ARM_EABIHF"

