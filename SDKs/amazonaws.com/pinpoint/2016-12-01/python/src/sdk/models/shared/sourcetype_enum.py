from dataclasses import dataclass, field
from typing import Enum

class SourceTypeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

