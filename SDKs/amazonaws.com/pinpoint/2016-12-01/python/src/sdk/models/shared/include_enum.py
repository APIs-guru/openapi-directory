from dataclasses import dataclass, field
from typing import Enum

class IncludeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

