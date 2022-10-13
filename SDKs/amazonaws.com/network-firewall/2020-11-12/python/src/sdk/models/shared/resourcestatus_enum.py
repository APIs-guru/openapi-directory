from dataclasses import dataclass, field
from typing import Enum

class ResourceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

