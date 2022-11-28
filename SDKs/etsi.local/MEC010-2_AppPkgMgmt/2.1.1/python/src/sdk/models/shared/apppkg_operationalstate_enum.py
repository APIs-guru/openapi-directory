from dataclasses import dataclass, field
from enum import Enum

class AppPkgOperationalStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

