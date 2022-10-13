from dataclasses import dataclass, field
from typing import Enum

class TextTypesEnum(str, Enum):
    LINE = "LINE"
    WORD = "WORD"

