from dataclasses import dataclass, field
from enum import Enum

class LogTypeEnum(str, Enum):
    AUDIO = "AUDIO"
    TEXT = "TEXT"

