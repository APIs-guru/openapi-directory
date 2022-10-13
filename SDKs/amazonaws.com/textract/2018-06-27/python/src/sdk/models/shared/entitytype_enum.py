from dataclasses import dataclass, field
from typing import Enum

class EntityTypeEnum(str, Enum):
    KEY = "KEY"
    VALUE = "VALUE"

