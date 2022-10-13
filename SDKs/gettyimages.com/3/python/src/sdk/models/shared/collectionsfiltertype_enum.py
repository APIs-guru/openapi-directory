from dataclasses import dataclass, field
from typing import Enum

class CollectionsFilterTypeEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"

