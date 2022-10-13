from dataclasses import dataclass, field
from typing import Enum

class OperatingSystemTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"

