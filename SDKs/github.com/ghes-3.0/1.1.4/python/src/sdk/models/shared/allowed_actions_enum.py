from dataclasses import dataclass, field
from typing import Enum

class AllowedActionsEnum(str, Enum):
    ALL = "all"
    LOCAL_ONLY = "local_only"
    SELECTED = "selected"

