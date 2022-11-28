from dataclasses import dataclass, field
from enum import Enum

class ProjectStateEnum(str, Enum):
    NORMAL = "NORMAL"
    SYNCING = "SYNCING"
    IMPORTING = "IMPORTING"

