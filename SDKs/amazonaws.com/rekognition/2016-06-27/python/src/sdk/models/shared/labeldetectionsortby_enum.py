from dataclasses import dataclass, field
from enum import Enum

class LabelDetectionSortByEnum(str, Enum):
    NAME = "NAME"
    TIMESTAMP = "TIMESTAMP"

