from dataclasses import dataclass, field
from typing import Enum

class TenancyEnum(str, Enum):
    DEDICATED = "DEDICATED"
    SHARED = "SHARED"

