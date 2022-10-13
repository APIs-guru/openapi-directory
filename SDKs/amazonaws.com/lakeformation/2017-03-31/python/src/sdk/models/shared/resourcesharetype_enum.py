from dataclasses import dataclass, field
from typing import Enum

class ResourceShareTypeEnum(str, Enum):
    FOREIGN = "FOREIGN"
    ALL = "ALL"

