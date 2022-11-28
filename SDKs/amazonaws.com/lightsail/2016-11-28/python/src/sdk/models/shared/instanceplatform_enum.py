from dataclasses import dataclass, field
from enum import Enum

class InstancePlatformEnum(str, Enum):
    LINUX_UNIX = "LINUX_UNIX"
    WINDOWS = "WINDOWS"

