from dataclasses import dataclass, field
from typing import Enum

class MailboxExportJobStateEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"

