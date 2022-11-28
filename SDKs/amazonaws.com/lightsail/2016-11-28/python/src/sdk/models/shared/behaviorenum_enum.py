from dataclasses import dataclass, field
from enum import Enum

class BehaviorEnumEnum(str, Enum):
    DONT_CACHE = "dont-cache"
    CACHE = "cache"

