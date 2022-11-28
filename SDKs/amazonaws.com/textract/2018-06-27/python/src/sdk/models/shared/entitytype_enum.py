from dataclasses import dataclass, field
from enum import Enum

class EntityTypeEnum(str, Enum):
    KEY = "KEY"
    VALUE = "VALUE"

