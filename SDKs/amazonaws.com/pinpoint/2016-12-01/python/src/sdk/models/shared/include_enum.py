from dataclasses import dataclass, field
from enum import Enum

class IncludeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

