from dataclasses import dataclass, field
from enum import Enum

class ParameterApplyTypeEnum(str, Enum):
    STATIC = "static"
    DYNAMIC = "dynamic"

