from dataclasses import dataclass, field
from typing import Enum

class AssemblyTypeEnum(str, Enum):
    NONE = "None"
    LINE = "Line"

