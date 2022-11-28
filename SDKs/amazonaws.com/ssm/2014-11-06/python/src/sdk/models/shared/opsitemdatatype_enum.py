from dataclasses import dataclass, field
from enum import Enum

class OpsItemDataTypeEnum(str, Enum):
    SEARCHABLE_STRING = "SearchableString"
    STRING = "String"

