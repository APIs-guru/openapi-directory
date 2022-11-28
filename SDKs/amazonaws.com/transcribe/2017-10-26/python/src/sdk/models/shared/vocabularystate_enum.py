from dataclasses import dataclass, field
from enum import Enum

class VocabularyStateEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

