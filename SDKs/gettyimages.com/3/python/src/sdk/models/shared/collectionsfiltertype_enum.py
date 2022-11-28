from dataclasses import dataclass, field
from enum import Enum

class CollectionsFilterTypeEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"

