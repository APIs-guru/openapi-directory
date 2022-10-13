from dataclasses import dataclass, field
from typing import Enum

class WorkloadImprovementStatusEnum(str, Enum):
    NOT_APPLICABLE = "NOT_APPLICABLE"
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    RISK_ACKNOWLEDGED = "RISK_ACKNOWLEDGED"

