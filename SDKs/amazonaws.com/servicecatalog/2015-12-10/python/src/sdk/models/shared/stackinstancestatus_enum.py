from dataclasses import dataclass, field
from enum import Enum

class StackInstanceStatusEnum(str, Enum):
    CURRENT = "CURRENT"
    OUTDATED = "OUTDATED"
    INOPERABLE = "INOPERABLE"

