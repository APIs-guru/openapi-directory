from dataclasses import dataclass, field
from enum import Enum

class InstanceStateNameEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SHUTTING_DOWN = "SHUTTING_DOWN"
    TERMINATED = "TERMINATED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

