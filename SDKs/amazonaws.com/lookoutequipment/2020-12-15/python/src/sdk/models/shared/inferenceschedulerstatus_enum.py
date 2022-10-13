from dataclasses import dataclass, field
from typing import Enum

class InferenceSchedulerStatusEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

