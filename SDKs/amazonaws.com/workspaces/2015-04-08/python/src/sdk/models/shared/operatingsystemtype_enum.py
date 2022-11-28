from dataclasses import dataclass, field
from enum import Enum

class OperatingSystemTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"

