from dataclasses import dataclass, field
from typing import Enum

class ContainerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"

