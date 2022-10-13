from dataclasses import dataclass, field
from typing import Enum

class ProjectStateEnum(str, Enum):
    NORMAL = "NORMAL"
    SYNCING = "SYNCING"
    IMPORTING = "IMPORTING"

