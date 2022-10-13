from dataclasses import dataclass, field
from typing import Enum

class OpsItemDataTypeEnum(str, Enum):
    SEARCHABLE_STRING = "SearchableString"
    STRING = "String"

