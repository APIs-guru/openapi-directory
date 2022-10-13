from dataclasses import dataclass, field
from typing import Enum

class LinuxIPTypeEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

