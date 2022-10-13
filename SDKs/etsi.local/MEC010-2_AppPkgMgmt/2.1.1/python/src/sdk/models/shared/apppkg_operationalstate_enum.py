from dataclasses import dataclass, field
from typing import Enum

class AppPkgOperationalStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

