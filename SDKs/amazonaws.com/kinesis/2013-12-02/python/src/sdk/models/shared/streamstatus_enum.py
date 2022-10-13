from dataclasses import dataclass, field
from typing import Enum

class StreamStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"

