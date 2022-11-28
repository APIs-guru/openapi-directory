from dataclasses import dataclass, field
from enum import Enum

class DocumentParameterTypeEnum(str, Enum):
    STRING = "String"
    STRING_LIST = "StringList"

