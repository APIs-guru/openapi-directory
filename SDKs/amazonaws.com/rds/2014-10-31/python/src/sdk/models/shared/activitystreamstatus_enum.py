from dataclasses import dataclass, field
from enum import Enum

class ActivityStreamStatusEnum(str, Enum):
    STOPPED = "stopped"
    STARTING = "starting"
    STARTED = "started"
    STOPPING = "stopping"

