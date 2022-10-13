from dataclasses import dataclass, field
from typing import Enum

class LaunchProfilePlatformEnum(str, Enum):
    LINUX = "LINUX"
    WINDOWS = "WINDOWS"

