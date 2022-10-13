from dataclasses import dataclass, field
from typing import Enum

class VocabularyStateEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

