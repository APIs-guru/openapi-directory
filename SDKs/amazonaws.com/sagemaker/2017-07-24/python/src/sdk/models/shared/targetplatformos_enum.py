from dataclasses import dataclass, field
from typing import Enum

class TargetPlatformOsEnum(str, Enum):
    ANDROID = "ANDROID"
    LINUX = "LINUX"

