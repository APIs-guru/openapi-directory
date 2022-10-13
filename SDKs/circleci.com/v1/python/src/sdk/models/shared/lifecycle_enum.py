from dataclasses import dataclass, field
from typing import Enum

class LifecycleEnum(str, Enum):
    QUEUED = "queued"
    SCHEDULED = "scheduled"
    NOT_RUN = "not_run"
    NOT_RUNNING = "not_running"
    RUNNING = "running"
    FINISHED = "finished"

