from dataclasses import dataclass, field
from typing import Enum

class InstancePlatformEnum(str, Enum):
    LINUX_UNIX = "LINUX_UNIX"
    WINDOWS = "WINDOWS"

