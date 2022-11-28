from dataclasses import dataclass, field
from enum import Enum

class DkimStatusEnum(str, Enum):
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    TEMPORARY_FAILURE = "TEMPORARY_FAILURE"
    NOT_STARTED = "NOT_STARTED"

