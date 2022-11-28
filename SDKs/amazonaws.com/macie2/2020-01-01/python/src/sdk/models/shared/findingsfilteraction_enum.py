from dataclasses import dataclass, field
from enum import Enum

class FindingsFilterActionEnum(str, Enum):
    ARCHIVE = "ARCHIVE"
    NOOP = "NOOP"

