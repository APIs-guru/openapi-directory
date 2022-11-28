from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

