from dataclasses import dataclass, field
from enum import Enum

class QueryStatusEnum(str, Enum):
    SCHEDULED = "Scheduled"
    RUNNING = "Running"
    COMPLETE = "Complete"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    TIMEOUT = "Timeout"
    UNKNOWN = "Unknown"

