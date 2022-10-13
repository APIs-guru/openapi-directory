from dataclasses import dataclass, field
from typing import Enum

class FilterTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    ENDPOINT = "ENDPOINT"

