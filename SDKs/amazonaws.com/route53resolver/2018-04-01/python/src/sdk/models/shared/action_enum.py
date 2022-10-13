from dataclasses import dataclass, field
from typing import Enum

class ActionEnum(str, Enum):
    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    ALERT = "ALERT"

