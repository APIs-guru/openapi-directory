from dataclasses import dataclass, field
from typing import Enum

class AntiSpamTypesEnum(str, Enum):
    NONE = "none"
    ADVANCED = "advanced"
    BASIC = "basic"

