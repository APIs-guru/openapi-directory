from dataclasses import dataclass, field
from typing import Enum,List

class ParameterTypeEnum(str, Enum):
    STRING = "String"
    STRING_LIST = "StringList"
    SECURE_STRING = "SecureString"

