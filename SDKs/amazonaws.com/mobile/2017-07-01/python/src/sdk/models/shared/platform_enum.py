from dataclasses import dataclass, field
from typing import Enum

class PlatformEnum(str, Enum):
    OSX = "OSX"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    OBJC = "OBJC"
    SWIFT = "SWIFT"
    ANDROID = "ANDROID"
    JAVASCRIPT = "JAVASCRIPT"

