from dataclasses import dataclass, field
from enum import Enum

class ResourceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

