from dataclasses import dataclass, field
from enum import Enum

class AntiSpamTypesEnum(str, Enum):
    NONE = "none"
    ADVANCED = "advanced"
    BASIC = "basic"

