from dataclasses import dataclass, field
from enum import Enum

class TargetPlatformAcceleratorEnum(str, Enum):
    INTEL_GRAPHICS = "INTEL_GRAPHICS"
    MALI = "MALI"
    NVIDIA = "NVIDIA"

