from dataclasses import dataclass, field
from typing import Enum

class ApplicationStatusEnum(str, Enum):
    DELETING = "DELETING"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    READY = "READY"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"

