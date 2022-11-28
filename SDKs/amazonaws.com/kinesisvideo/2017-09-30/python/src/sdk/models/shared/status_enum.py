from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"

