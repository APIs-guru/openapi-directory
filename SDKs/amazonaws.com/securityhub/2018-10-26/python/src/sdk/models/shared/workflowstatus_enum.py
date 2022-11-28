from dataclasses import dataclass, field
from enum import Enum

class WorkflowStatusEnum(str, Enum):
    NEW = "NEW"
    NOTIFIED = "NOTIFIED"
    RESOLVED = "RESOLVED"
    SUPPRESSED = "SUPPRESSED"

