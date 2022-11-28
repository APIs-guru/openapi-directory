from dataclasses import dataclass, field
from enum import Enum

class PortalStateEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"

