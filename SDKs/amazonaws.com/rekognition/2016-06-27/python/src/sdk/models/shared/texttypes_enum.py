from dataclasses import dataclass, field
from enum import Enum

class TextTypesEnum(str, Enum):
    LINE = "LINE"
    WORD = "WORD"

