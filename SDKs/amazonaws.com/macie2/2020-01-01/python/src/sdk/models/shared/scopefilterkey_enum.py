from dataclasses import dataclass, field
from typing import Enum

class ScopeFilterKeyEnum(str, Enum):
    OBJECT_EXTENSION = "OBJECT_EXTENSION"
    OBJECT_LAST_MODIFIED_DATE = "OBJECT_LAST_MODIFIED_DATE"
    OBJECT_SIZE = "OBJECT_SIZE"
    OBJECT_KEY = "OBJECT_KEY"

