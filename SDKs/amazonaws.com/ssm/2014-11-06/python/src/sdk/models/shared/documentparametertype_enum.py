from dataclasses import dataclass, field
from typing import Enum,List

class DocumentParameterTypeEnum(str, Enum):
    STRING = "String"
    STRING_LIST = "StringList"

