from dataclasses import dataclass, field
from enum import Enum

class PatchActionEnum(str, Enum):
    ALLOW_AS_DEPENDENCY = "ALLOW_AS_DEPENDENCY"
    BLOCK = "BLOCK"

