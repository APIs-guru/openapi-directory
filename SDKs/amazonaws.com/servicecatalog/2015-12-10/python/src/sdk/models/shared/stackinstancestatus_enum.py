from dataclasses import dataclass, field
from typing import Enum

class StackInstanceStatusEnum(str, Enum):
    CURRENT = "CURRENT"
    OUTDATED = "OUTDATED"
    INOPERABLE = "INOPERABLE"

