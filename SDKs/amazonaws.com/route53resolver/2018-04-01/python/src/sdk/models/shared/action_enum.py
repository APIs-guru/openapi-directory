from dataclasses import dataclass, field
from enum import Enum

class ActionEnum(str, Enum):
    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    ALERT = "ALERT"

