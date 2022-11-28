from dataclasses import dataclass, field
from enum import Enum

class ProvisioningJobStatusEnum(str, Enum):
    ONGOING = "ongoing"
    CANCELLED = "cancelled"
    FAILED = "failed"
    FINISHED = "finished"

