from dataclasses import dataclass, field
from enum import Enum

class PropertyDataTypeEnum(str, Enum):
    STRING = "STRING"
    INTEGER = "INTEGER"
    DOUBLE = "DOUBLE"
    BOOLEAN = "BOOLEAN"
    STRUCT = "STRUCT"

