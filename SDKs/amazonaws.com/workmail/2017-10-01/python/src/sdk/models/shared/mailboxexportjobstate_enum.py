from dataclasses import dataclass, field
from enum import Enum

class MailboxExportJobStateEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"

