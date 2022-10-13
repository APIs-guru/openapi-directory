from dataclasses import dataclass, field
from typing import Enum

class FindingsFilterActionEnum(str, Enum):
    ARCHIVE = "ARCHIVE"
    NOOP = "NOOP"

