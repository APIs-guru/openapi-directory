from dataclasses import dataclass, field
from enum import Enum

class ForwardValuesEnum(str, Enum):
    NONE = "none"
    ALLOW_LIST = "allow-list"
    ALL = "all"

