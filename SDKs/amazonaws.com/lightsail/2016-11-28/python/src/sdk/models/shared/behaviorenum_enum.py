from dataclasses import dataclass, field
from typing import Enum

class BehaviorEnumEnum(str, Enum):
    DONT_CACHE = "dont-cache"
    CACHE = "cache"

