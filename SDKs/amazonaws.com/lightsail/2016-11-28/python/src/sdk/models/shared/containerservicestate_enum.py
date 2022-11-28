from dataclasses import dataclass, field
from enum import Enum

class ContainerServiceStateEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DISABLED = "DISABLED"
    DEPLOYING = "DEPLOYING"

