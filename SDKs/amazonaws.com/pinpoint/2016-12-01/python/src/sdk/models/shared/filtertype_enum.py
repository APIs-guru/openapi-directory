from dataclasses import dataclass, field
from enum import Enum

class FilterTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    ENDPOINT = "ENDPOINT"

