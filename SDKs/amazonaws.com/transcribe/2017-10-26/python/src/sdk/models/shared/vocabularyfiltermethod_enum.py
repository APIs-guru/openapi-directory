from dataclasses import dataclass, field
from enum import Enum

class VocabularyFilterMethodEnum(str, Enum):
    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

