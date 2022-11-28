from dataclasses import dataclass, field
from enum import Enum

class EnabledRepositoriesEnum(str, Enum):
    ALL = "all"
    NONE = "none"
    SELECTED = "selected"

