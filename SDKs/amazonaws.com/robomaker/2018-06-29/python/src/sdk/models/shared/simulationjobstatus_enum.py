from dataclasses import dataclass, field
from typing import Enum

class SimulationJobStatusEnum(str, Enum):
    PENDING = "Pending"
    PREPARING = "Preparing"
    RUNNING = "Running"
    RESTARTING = "Restarting"
    COMPLETED = "Completed"
    FAILED = "Failed"
    RUNNING_FAILED = "RunningFailed"
    TERMINATING = "Terminating"
    TERMINATED = "Terminated"
    CANCELED = "Canceled"

