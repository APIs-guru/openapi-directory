from dataclasses import dataclass, field
from enum import Enum

class RecordStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"

