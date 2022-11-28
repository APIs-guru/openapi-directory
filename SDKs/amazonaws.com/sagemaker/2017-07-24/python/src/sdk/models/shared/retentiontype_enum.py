from dataclasses import dataclass, field
from enum import Enum

class RetentionTypeEnum(str, Enum):
    RETAIN = "Retain"
    DELETE = "Delete"

