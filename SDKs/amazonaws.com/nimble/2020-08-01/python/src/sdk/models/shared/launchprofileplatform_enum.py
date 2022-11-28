from dataclasses import dataclass, field
from enum import Enum

class LaunchProfilePlatformEnum(str, Enum):
    LINUX = "LINUX"
    WINDOWS = "WINDOWS"

