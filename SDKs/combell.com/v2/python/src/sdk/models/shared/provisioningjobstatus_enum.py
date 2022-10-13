from dataclasses import dataclass, field
from typing import Enum

class ProvisioningJobStatusEnum(str, Enum):
    ONGOING = "ongoing"
    CANCELLED = "cancelled"
    FAILED = "failed"
    FINISHED = "finished"

