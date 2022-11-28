from dataclasses import dataclass, field
from enum import Enum

class ManagedDataIdentifierSelectorEnum(str, Enum):
    ALL = "ALL"
    EXCLUDE = "EXCLUDE"
    INCLUDE = "INCLUDE"
    NONE = "NONE"

