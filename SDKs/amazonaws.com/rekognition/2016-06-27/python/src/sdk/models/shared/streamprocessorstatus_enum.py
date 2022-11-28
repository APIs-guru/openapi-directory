from dataclasses import dataclass, field
from enum import Enum

class StreamProcessorStatusEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"

