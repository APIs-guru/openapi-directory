from dataclasses import dataclass, field
from enum import Enum

class TenancyEnum(str, Enum):
    DEDICATED = "DEDICATED"
    SHARED = "SHARED"

