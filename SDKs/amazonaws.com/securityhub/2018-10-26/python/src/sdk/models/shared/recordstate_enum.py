from dataclasses import dataclass, field
from typing import Enum

class RecordStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"

