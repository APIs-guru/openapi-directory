from dataclasses import dataclass, field
from typing import Enum

class PlatformTypeEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"

