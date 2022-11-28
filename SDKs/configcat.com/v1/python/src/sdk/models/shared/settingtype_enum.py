from dataclasses import dataclass, field
from enum import Enum

class SettingTypeEnum(str, Enum):
    BOOLEAN = "boolean"
    STRING = "string"
    INT = "int"
    DOUBLE = "double"

