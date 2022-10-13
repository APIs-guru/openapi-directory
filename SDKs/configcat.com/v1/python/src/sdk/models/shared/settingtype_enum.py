from dataclasses import dataclass, field
from typing import Enum

class SettingTypeEnum(str, Enum):
    BOOLEAN = "boolean"
    STRING = "string"
    INT = "int"
    DOUBLE = "double"

