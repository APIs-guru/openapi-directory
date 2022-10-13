from dataclasses import dataclass, field
from typing import Enum

class ConsumerStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

