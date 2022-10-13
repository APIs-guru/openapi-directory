from dataclasses import dataclass, field
from typing import Enum

class RetentionTypeEnum(str, Enum):
    RETAIN = "Retain"
    DELETE = "Delete"

