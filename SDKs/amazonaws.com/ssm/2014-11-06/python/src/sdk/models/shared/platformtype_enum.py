from dataclasses import dataclass, field
from enum import Enum

class PlatformTypeEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"

