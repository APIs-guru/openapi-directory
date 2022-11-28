from dataclasses import dataclass, field
from enum import Enum

class ProjectVersionStatusEnum(str, Enum):
    TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS"
    TRAINING_COMPLETED = "TRAINING_COMPLETED"
    TRAINING_FAILED = "TRAINING_FAILED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETING = "DELETING"

