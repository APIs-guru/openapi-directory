from dataclasses import dataclass, field
from enum import Enum

class StatementStatusStringEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    PICKED = "PICKED"
    STARTED = "STARTED"
    FINISHED = "FINISHED"
    ABORTED = "ABORTED"
    FAILED = "FAILED"

