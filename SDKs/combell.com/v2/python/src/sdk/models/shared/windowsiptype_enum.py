from dataclasses import dataclass, field
from enum import Enum

class WindowsIPTypeEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

