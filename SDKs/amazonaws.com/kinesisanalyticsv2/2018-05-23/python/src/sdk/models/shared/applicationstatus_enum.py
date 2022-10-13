from dataclasses import dataclass, field
from typing import Enum

class ApplicationStatusEnum(str, Enum):
    DELETING = "DELETING"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    READY = "READY"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    AUTOSCALING = "AUTOSCALING"
    FORCE_STOPPING = "FORCE_STOPPING"
    MAINTENANCE = "MAINTENANCE"
    ROLLING_BACK = "ROLLING_BACK"
    ROLLED_BACK = "ROLLED_BACK"

