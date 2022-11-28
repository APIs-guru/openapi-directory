from dataclasses import dataclass, field
from enum import Enum

class SimulationJobBatchStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    COMPLETED = "Completed"
    CANCELED = "Canceled"
    CANCELING = "Canceling"
    COMPLETING = "Completing"
    TIMING_OUT = "TimingOut"
    TIMED_OUT = "TimedOut"

