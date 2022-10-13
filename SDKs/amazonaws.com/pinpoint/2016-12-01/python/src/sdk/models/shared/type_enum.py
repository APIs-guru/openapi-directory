from dataclasses import dataclass, field
from typing import Enum

class TypeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

