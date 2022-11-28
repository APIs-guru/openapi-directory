from dataclasses import dataclass, field
from enum import Enum

class BlockTypeEnum(str, Enum):
    KEY_VALUE_SET = "KEY_VALUE_SET"
    PAGE = "PAGE"
    LINE = "LINE"
    WORD = "WORD"
    TABLE = "TABLE"
    CELL = "CELL"
    SELECTION_ELEMENT = "SELECTION_ELEMENT"

