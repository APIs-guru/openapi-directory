from dataclasses import dataclass, field
from enum import Enum

class IngestionJobStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

