from dataclasses import dataclass, field
from enum import Enum

class ParameterTypeEnum(str, Enum):
    STRING = "String"
    STRING_LIST = "StringList"
    SECURE_STRING = "SecureString"

