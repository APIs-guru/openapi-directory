from dataclasses import dataclass, field
from enum import Enum

class ResourceShareTypeEnum(str, Enum):
    FOREIGN = "FOREIGN"
    ALL = "ALL"

