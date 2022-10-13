from dataclasses import dataclass, field
from typing import Enum

class WorkflowStatusEnum(str, Enum):
    NEW = "NEW"
    NOTIFIED = "NOTIFIED"
    RESOLVED = "RESOLVED"
    SUPPRESSED = "SUPPRESSED"

