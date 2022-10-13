from dataclasses import dataclass, field
from typing import Enum

class VocabularyFilterMethodEnum(str, Enum):
    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

