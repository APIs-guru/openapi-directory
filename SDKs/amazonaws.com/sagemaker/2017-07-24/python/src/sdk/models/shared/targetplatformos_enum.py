from dataclasses import dataclass, field
from enum import Enum

class TargetPlatformOsEnum(str, Enum):
    ANDROID = "ANDROID"
    LINUX = "LINUX"

