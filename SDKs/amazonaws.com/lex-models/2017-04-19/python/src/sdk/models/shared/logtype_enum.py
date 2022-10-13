from dataclasses import dataclass, field
from typing import Enum

class LogTypeEnum(str, Enum):
    AUDIO = "AUDIO"
    TEXT = "TEXT"

