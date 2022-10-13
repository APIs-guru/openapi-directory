from dataclasses import dataclass, field
from typing import Enum

class AttributeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    ALL = "ALL"

