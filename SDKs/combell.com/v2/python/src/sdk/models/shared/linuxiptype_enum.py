from dataclasses import dataclass, field
from enum import Enum

class LinuxIPTypeEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

