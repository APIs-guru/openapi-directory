from dataclasses import dataclass, field
from enum import Enum

class RelationshipTypeEnum(str, Enum):
    VALUE = "VALUE"
    CHILD = "CHILD"
    COMPLEX_FEATURES = "COMPLEX_FEATURES"

