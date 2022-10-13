from dataclasses import dataclass, field
from typing import Enum

class RelationshipTypeEnum(str, Enum):
    VALUE = "VALUE"
    CHILD = "CHILD"
    COMPLEX_FEATURES = "COMPLEX_FEATURES"

