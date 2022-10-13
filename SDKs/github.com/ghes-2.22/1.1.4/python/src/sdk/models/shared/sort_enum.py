from dataclasses import dataclass, field
from typing import Enum

class SortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"

