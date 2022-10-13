from dataclasses import dataclass, field
from typing import Enum

class CanaryStateEnum(str, Enum):
    CREATING = "CREATING"
    READY = "READY"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    ERROR = "ERROR"
    DELETING = "DELETING"

