from dataclasses import dataclass, field
from typing import Enum

class StreamProcessorStatusEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"

