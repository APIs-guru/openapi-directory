from dataclasses import dataclass, field
from enum import Enum

class FaceSearchSortByEnum(str, Enum):
    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

