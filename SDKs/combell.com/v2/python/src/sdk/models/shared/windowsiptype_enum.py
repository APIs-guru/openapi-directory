from dataclasses import dataclass, field
from typing import Enum

class WindowsIPTypeEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

